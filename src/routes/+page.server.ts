import AWS from 'aws-sdk';
import type { ScanInput } from 'aws-sdk/clients/dynamodb.js';

export interface OilPriceData {
	date: string;
	price: number;
	gallons: number;
}

export interface GroupOilData {
	gallon: number;
	prices: {
		date: Date;
		price: number;
	}[];
}

export async function load({ params }) {
	const awsConfig = {
		region: 'us-east-1',
		endpoint: 'http://dynamodb.us-east-1.amazonaws.com',
		accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
		secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
	};
	AWS.config.update(awsConfig);

	const dynamodb = new AWS.DynamoDB.DocumentClient();

	const dbParams: ScanInput = {
		TableName: 'Oil-Price'
	};

	const scanResults: OilPriceData[] = [];

	console.log('Getting data from dynamo: ');
	const items = await dynamodb.scan(dbParams).promise();
	console.log('result from db: ', items);

	items.Items?.forEach((item) => scanResults.push(item as OilPriceData));
	dbParams.ExclusiveStartKey = items.LastEvaluatedKey;
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	} as Intl.DateTimeFormatOptions;
	scanResults.map((e) => {
		const dateObject = new Date(e.date);
		return (e.date = dateObject.toLocaleDateString('en-us', options));
	});
	const groupData = groupOilPrice(scanResults);
	console.log('Done parsing data: ', groupData);

	return { oilData: groupData };
}

function groupOilPrice(scanResults: OilPriceData[]) {
	const groupData: GroupOilData[] = [];

	// Group the data by date
	scanResults.forEach((item) => {
		const existingGroup = groupData.find((group) => group.gallon === item.gallons);
		if (existingGroup) {
			existingGroup.prices.push({
				date: new Date(item.date),
				price: item.price
			});
		} else {
			groupData.push({
				gallon: item.gallons,
				prices: [
					{
						date: new Date(item.date),
						price: item.price
					}
				]
			});
		}
	});
	groupData.forEach((e) => {
		e.prices.sort((a, b) => (a.date < b.date ? -1 : 1));
	});
	return groupData;
}
