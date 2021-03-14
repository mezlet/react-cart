import React, { useEffect } from 'react';
import { useCartDispatcher } from '../../../hooks/useCartDispatcher';
import CartHeader from './CartHeader';
import CartContainer from './CartContainer';
import { Container } from 'react-bootstrap';

const Cart = () => {
	const { cart, subTotal, cache } = useCartDispatcher();

	useEffect(() => {
		subTotal();
	}, [cart, cache]);

	return (
		<Container className='f-12' fluid>
			<CartHeader />
			<CartContainer/>
		</Container>
	);
};

export { Cart };
