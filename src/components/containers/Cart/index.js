import React, { useEffect } from 'react';
import BackDrop from '../../presentation/BackDrop';
import { useCartDispatcher } from '../../../hooks/useCartDispatcher';
import { useFetch } from '../../../hooks/useFetch';
import CartHeader from '../../presentation/CartHeader';
import CartContainer from '../../presentation/CartContainer';
import { Container } from 'react-bootstrap';

const Cart = () => {
	const { showDrawer, currency, cart, getProducts, subTotal, toggleDrawer } = useCartDispatcher();
	const [loading, data, error] = useFetch();
	let backdrop;

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

	if (showDrawer) {
		backdrop = <BackDrop toggleDrawer={toggleDrawer} />;
	}
	return (
		<Container className='f-12 ' fluid>
			<CartHeader cart={cart} />
			<CartContainer error={error} loading={loading} showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
		</Container>
	);
};

export { Cart };
