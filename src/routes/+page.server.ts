import AWS from 'aws-sdk';
import type { ScanInput } from 'aws-sdk/clients/dynamodb.js';

export async function load({ params }) {
	const awsConfig = {
		region: 'us-east-1',
		endpoint: 'http://dynamodb.us-east-1.amazonaws.com'
	};
	AWS.config.update(awsConfig);

	const dynamodb = new AWS.DynamoDB.DocumentClient();

	const dbParams: ScanInput = {
		TableName: 'OilPrices'
	};

	const scanResults: unknown[] = [];
	let items;

	do {
		console.log('Getting data from dynamo: ');
		items = await dynamodb.scan(dbParams).promise();
		items.Items?.forEach((item) => scanResults.push(item));
		dbParams.ExclusiveStartKey = items.LastEvaluatedKey;
	} while (typeof items.LastEvaluatedKey != 'undefined');

	return scanResults;
}
