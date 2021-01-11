export type Order = {
	id: number;
	address: string;
	latitude: number;
	longitude: number;
	moment: string;
	status: string;
	total: number;
	products: Product[]
}

export type Product = {
	id: 5;
	name: string;
	price: number;
	description: string;
	imageUri: string;
}