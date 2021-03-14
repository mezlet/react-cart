import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';

const MainNav = ({ cart, toggleDrawer }) => {
	return (
		<div className='f-12'>
			<Navbar bg='' variant='' className='border-bottom'>
				<Navbar.Brand href='#' className='text-secondary l-3'>
					LUMIN
				</Navbar.Brand>
				<Nav className='mr-auto '>
					<Nav.Link href='#' className='text-secondary'>
						Shop
					</Nav.Link>
					<Nav.Link href='#' className='text-secondary'>
						Learn
					</Nav.Link>
				</Nav>
				{/* <Nav> */}
					<div className='text-secondary'>
						<span className='mx-3'>Account</span>
						<i className='fas fa-shopping-cart cursor' onClick={toggleDrawer}></i>
						<span className='mt-n5 pt-n3'>{cart.length}</span>
					</div>
				{/* </Nav> */}
			</Navbar>
		</div>
	);
};

MainNav.propTypes = {
	cart: PropTypes.array.isRequired,
	toggleDrawer: PropTypes.func.isRequired
}

export default MainNav;
