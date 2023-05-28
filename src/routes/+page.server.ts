import AWS from 'aws-sdk';
import type { ScanInput } from 'aws-sdk/clients/dynamodb.js';

export interface OilPriceData {
	date: string;
	price: number;
	gallons: number;
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

	scanResults.sort((a, b) => (a.date < b.date ? 1 : -1));
	console.log('Done parsing data: ', scanResults);
	return { scanData: scanResults };
}
