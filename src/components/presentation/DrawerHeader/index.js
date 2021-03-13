import React from 'react';
import PropTypes from 'prop-types';

const DrawerHeader = ({ toggleDrawer }) => {
	return (
		<div className='d-flex my-3'>
			<div className='drawer-left-icon' onClick={toggleDrawer}>
				&#8249;
			</div>
			<h5 className='mx-3'>Your Cart</h5>
		</div>
	);
};

DrawerHeader.propTypes = {
	toggleDrawer: PropTypes.func.isRequired
}
export default DrawerHeader;
