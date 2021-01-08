import React from "react";
import ProductCard from "./ProductCard";
import {Product} from "./types";
import {checkIsSelected} from "./helpers";

type Props = {
	products: Product[];
	selectedProducts: Product[];
	onSelectedProd: (product: Product) => void;
}

function ProductsList({ products, selectedProducts, onSelectedProd }: Props) {
	return (
		<div className="orders-list-container">
			<div className="orders-list-items">
				{products.map(product => (
					<ProductCard
						key={product.id}
						product={product}
						onSelectedProd={onSelectedProd}
						isSelected={checkIsSelected(selectedProducts, product)}
					/>
					))}
			</div>
		</div>
	)
}

export default ProductsList;