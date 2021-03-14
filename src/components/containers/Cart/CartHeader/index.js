import React from 'react';
import TopNav from '../../../presentation/TopNav';
import MainNav from '../../../presentation/MainNav';
import { Row, Col } from 'react-bootstrap';
import { useCartDispatcher } from '../../../../hooks/useCartDispatcher';

const CartHeader = () => {
	const { cart, toggleDrawer } = useCartDispatcher()
	return (
		<Row className='bg-white   w-100'>
			<Col className=' w-100'>
				<MainNav toggleDrawer = { toggleDrawer } cart={ cart } />
				<TopNav />
			</Col>
		</Row>
	);
};

export default CartHeader;
