import React from 'react';
import CartList from '../CartList';
import Drawer from '../../Drawer';
import BackDrop from '../../../components/BackDrop';
import Loader from '../../../components/Loader';
import { useFetch } from '../../../hooks/useFetch';
import { useCartDispatcher } from '../../../hooks/useCartDispatcher';
import useToaster from '../../../hooks/useToaster';

const CartContainer = () => {
	const { showDrawer, toggleDrawer, error } = useCartDispatcher();
	const { loading, error: serviceError } = useFetch();
	const { showError } = useToaster();

	return (
		<div>
			{error && !showDrawer && showError(`${serviceError.message}`)}
			{loading && !showDrawer ? (
				<Loader />
			) : (
				<div>
					<Drawer />
					{showDrawer && <BackDrop toggleDrawer={toggleDrawer} />}
					<CartList />
				</div>
			)}
		</div>
	);
};

export default CartContainer;
