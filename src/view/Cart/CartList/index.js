import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import CartItem from '../../../components/CartItem';
import { useCartDispatcher } from '../../../hooks/useCartDispatcher';
import { Row, Col } from 'react-bootstrap';

const CartList = () => {
	const { addItem, products, currency } = useCartDispatcher();

	const item = products.map(item => {
		return (
			<Col className='my-3 px-3  d-flex justify-content-center' md={4} sm={6} key={item.id}>
				<CartItem item={item} addItem={addItem} symbol={getSymbolFromCurrency(currency)} />
			</Col>
		);
	});
	return <Row className='d-flex justify-content-center primary-bg '>{item}</Row>;
};

export default CartList;
