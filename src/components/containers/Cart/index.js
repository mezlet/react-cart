import React, { useEffect } from 'react';
import { useCartDispatcher } from '../../../hooks/useCartDispatcher';
import { useFetch } from '../../../hooks/useFetch';
import CartHeader from '../../presentation/CartHeader';
import CartContainer from '../../presentation/CartContainer';
import { Container } from 'react-bootstrap';

const Cart = () => {
	const { showDrawer, currency, cart, getProducts, subTotal, toggleDrawer } = useCartDispatcher();
	const [loading, data, error] = useFetch();

	useEffect(() => {
		if (data) {
			const { products, currency: currencies } = data;
			getProducts({ products, currencies });
		}
		if (error) {
			console.log(error);
		}
	}, [data, currency]);

	useEffect(() => {
		subTotal();
	}, [cart]);

	return (
		<Container className='f-12' fluid>
			<CartHeader cart={cart} />
			<CartContainer error={error} loading={loading} showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
		</Container>
	);
};

export { Cart };
