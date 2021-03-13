import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../TopNav';
import MainNav from '../MainNav';

import { Row, Col } from 'react-bootstrap';

const CartHeader = ({ cart }) => {
	return (
		<Row className='bg-white   w-100'>
			<Col className=' w-100'>
				<MainNav cart={cart} />
				<TopNav />
			</Col>
		</Row>
	);
};

CartHeader.propTypes = {
	cart: PropTypes.array.isRequired
};
export default CartHeader;
