import { useGlobalContext } from './useGlobalContext';

import {
	increaseCount,
	decreaseCount,
	drawerToggle,
	addItem,
	subTotal,
	deleteItem,
	getProducts,
	changeCurrency
} from '../context/dispatchers/cart';

const useCartDispatcher = () => {
	const { cartDispatch, cartState: state } = useGlobalContext();

	return {
		...state,
		increase: id => increaseCount(id, cartDispatch, state.cache),
		decrease: id => decreaseCount(id, cartDispatch, state.cart, state.cache, state.showDrawer),
		toggleDrawer: () => drawerToggle(state.showDrawer, cartDispatch),
		addItem: item => addItem(item, state.cart, state.cache, cartDispatch, state.showDrawer),
		subTotal: () => subTotal(state.cart, state.cache, cartDispatch),
		removeItem: id => deleteItem(id, state.cart, cartDispatch, state.showDrawer),
		getProducts: data => getProducts(data, state.cache, cartDispatch),
		changeCurrency: currency => changeCurrency(currency, cartDispatch)
	};
};

export { useCartDispatcher };
