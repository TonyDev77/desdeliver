import React from "react";
import {Product} from "./types";
import {formatPrice} from "./helpers";

type Props = {
	product: Product;
	onSelectedProd: (product: Product) => void;
	isSelected: boolean;
}



function ProductCard({ product, onSelectedProd, isSelected }: Props) {
	return (
		<div
			className={`order-card-container ${isSelected ? 'selected' : ''}`}
			onClick={() => onSelectedProd(product)}
		>
			<h3 className="order-card-title">
				{product.name}
			</h3>
			<img className="order-card-image"
				src={product.imageUri}
				 alt={product.name}
			/>
			<h3 className="order-card-price"> {formatPrice(product.price)} </h3>
			<div className="order-card-description">
				<h3>Descrição</h3>
				<p>
					{product.description}
				</p>
			</div>
		</div>
	)
}

export default ProductCard;