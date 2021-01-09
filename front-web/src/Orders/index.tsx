import React, {useEffect, useState} from "react";
import {toast} from 'react-toastify';
import './styles.css'
import StepsHeader from "../StepsHeader";
import ProductsList from "./ProductsList";
import {OrderLocationData, Product} from "./types";
import {fetchProducts, saveOrder} from "../api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import Footer from "../Footer";
import {checkIsSelected} from "./helpers";

function Orders() {

	const [products, setProducts] = useState<Product []>([])
	const [selectedProducts, setSelectedProducts] = useState<Product []>([])
	const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
	const totalPrice = selectedProducts.reduce((sum, item) => {
		return sum + item.price;
	}, 0);

	useEffect(() => {
		fetchProducts()
			.then(response => setProducts(response.data))
			.catch(() => {
				toast.warning('Erro ao listar produtos.');
			})
	}, [])

	const handleSelectProduct = (product: Product) => {
		const isAlreadySelected = checkIsSelected(selectedProducts, product);

		if (isAlreadySelected) {
			const selected = selectedProducts.filter(item => item.id !== product.id);
			setSelectedProducts(selected);
		} else {
			setSelectedProducts(previous => [...previous, product]);
		}
	}

	const handleSubmit = () => {
		const productsIds = selectedProducts.map(({id}) => ({id}));
		const payload = {
			...orderLocation!,
			products: productsIds
		}

		// TODO
		if (productsIds.length < 1) {
			toast.warning("Ops! Nenhum item selecionado!");
			//throw new Error("Ops! Nenhum item selecionado!");
		} else if (payload.address == null) {
			//throw new Error("Ops! Faltou inserir o endereço!");
			toast.warning("Ops! Faltou inserir o endereço!");
		} else {
			saveOrder(payload).then((response) => {
				toast.error(`Pedido enviado com sucesso! Nº ${response.data.id} `);
				setSelectedProducts([]);
			}).catch((e) => {
					toast.warning(e.message);
				})
		}
	}

	return (
		<>
			<div className="orders-container">
				<StepsHeader/>
				<ProductsList
					products={products}
					onSelectedProd={handleSelectProduct}
					selectedProducts={selectedProducts}
				/>
				<OrderLocation
					onChangeLocation={location => setOrderLocation(location)}
				/>
				<OrderSummary
					amount={selectedProducts.length}
					totalPrice={totalPrice}
					onSubmit={handleSubmit}
				/>
			</div>
			<Footer/>
		</>
	)
}

export default Orders;