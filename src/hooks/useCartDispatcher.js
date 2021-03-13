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
		cartDispatch,
		...state,
		increase: id => increaseCount(id, cartDispatch, state.cart),
		decrease: id => decreaseCount(id, cartDispatch, state.cart, state.showDrawer),
		toggleDrawer: () => drawerToggle(cartDispatch),
		addItem: item => addItem(item, state.cart, cartDispatch, state.showDrawer),
		subTotal: () => subTotal(state.cart, cartDispatch),
		removeItem: (id) => deleteItem(id, state.cart, cartDispatch, state.showDrawer),
		getProducts: (data) => getProducts(data, cartDispatch ),
		changeCurrency: (currency) => changeCurrency(currency, cartDispatch )
	};
};

export { useCartDispatcher };
