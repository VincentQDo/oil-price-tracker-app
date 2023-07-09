export interface OilPriceDataScanned {
	date: string;
	price: number;
	gallons: number;
	supplier_name: string;
	supplier_url: string;
}

export interface OilPriceData {
	date: Date;
	price: number;
	gallons: number;
	supplier_name: string;
	supplier_url: string;
}

export interface GroupedData {
	[supplier: string]: OilPriceData[];
}

export interface GroupedDataItem {
	supplier: string;
	data: OilPriceData[];
}
