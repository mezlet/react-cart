import React from 'react';
import { Alert } from 'react-bootstrap';
import CartList from '../CartList';
import Drawer from '../../Drawer';
import BackDrop from '../../../presentation/BackDrop';
import Loader from '../../../presentation/Loader';
import { useCartDispatcher } from '../../../../hooks/useCartDispatcher';
import { useFetch } from '../../../../hooks/useFetch';

const CartContainer = () => {
	const { showDrawer, toggleDrawer } = useCartDispatcher();
	const { loading, error } = useFetch();
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
					{loading && !showDrawer ? (
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

export default CartContainer;
