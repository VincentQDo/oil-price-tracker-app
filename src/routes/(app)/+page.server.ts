import AWS from 'aws-sdk';
import type { ScanInput } from 'aws-sdk/clients/dynamodb.js';
import type {
	GroupedData,
	GroupedDataItem,
	OilPriceData,
	OilPriceDataScanned
} from '../../interfaces/OilPrices';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
		TableName: 'Oil-Price',
		FilterExpression: '#gallons = :gallonValue',
		ExpressionAttributeNames: {
			'#gallons': 'gallons'
		},
		ExpressionAttributeValues: {
			':gallonValue': 150
		}
	};

	const scanResults: OilPriceDataScanned[] = [];

	console.log('Getting data from dynamo: ');
	const items = await dynamodb.scan(dbParams).promise();
	console.log('result from db: ', items);

	items.Items?.forEach((item) => scanResults.push(item as OilPriceDataScanned));
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
	// const groupData = groupOilPrice(scanResults);
	const groupedData = groupOilData(scanResults);
	console.log('Done parsing data: ', groupedData);

	return { oilData: groupedData };
}

function groupOilData(rawData: OilPriceDataScanned[]): GroupedDataItem[] {
	const groupedData: GroupedData = {};

	rawData.forEach((item) => {
		const translatedObject: OilPriceData = {
			date: new Date(item.date),
			price: item.price,
			gallons: item.gallons,
			supplier_name: item.supplier_name,
			supplier_url: item.supplier_url
		};
		const supplier = item.supplier_name;

		if (!groupedData[supplier]) {
			groupedData[supplier] = [];
		}

		groupedData[supplier].push(translatedObject);
	});

	const groupedArray: GroupedDataItem[] = [];

	for (const supplier in groupedData) {
		groupedArray.push({
			supplier,
			data: groupedData[supplier]
		});
	}

	return groupedArray;
}
