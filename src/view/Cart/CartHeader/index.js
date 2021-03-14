import React from 'react';
import TopNav from '../../../components/TopNav';
import MainNav from '../../../components/MainNav';
import { Row, Col } from 'react-bootstrap';
import { useCartDispatcher } from '../../../hooks/useCartDispatcher';

const CartHeader = () => {
	const { cart, toggleDrawer } = useCartDispatcher();
	return (
		<Row className='bg-white   w-100'>
			<Col className=' w-100'>
				<MainNav toggleDrawer={toggleDrawer} cart={cart} />
				<TopNav />
			</Col>
		</Row>
	);
};

export default CartHeader;
