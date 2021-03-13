import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import CartList from '../../containers/Cart/CartList';
import Drawer from '../../containers/Drawer';
import BackDrop from '../BackDrop';
import Loader from '../Loader';

const CartContainer = ({ error, loading, showDrawer, toggleDrawer }) => {
	let backdrop;
	if (showDrawer) {
		backdrop = <BackDrop toggleDrawer={toggleDrawer} />;
	}
	return (
			<div>
				{error ? (
					<Alert variant='danger' dismissible>
						<Alert.Heading>Oh snap! Something went wrong!</Alert.Heading>
					</Alert>
				) : (
					<div>
						{loading ? (
							<Loader />
						) : (
							<div>
								<Drawer />
								{backdrop}
								<CartList />
							</div>
						)}
					</div>
				)}
			</div>
	);
};

CartContainer.propTypes = {
	error: PropTypes.bool,
	loading: PropTypes.bool,
	showDrawer: PropTypes.bool.isRequired,
	toggleDrawer: PropTypes.func.isRequired
}
export default CartContainer;
