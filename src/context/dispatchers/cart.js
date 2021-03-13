import {
	increase,
	decrease,
	toggleDrawer,
	addToCart,
	getTotal,
	removeItem,
	productList,
	changeProductCurrency
} from '../actions/cart';

export const increaseCount = (id, cartDispatch, cart) => {
	const newCart = cart.map(item => {
		if (item.id === id) {
			item.count += 1;
			item.total = item.price * item.count;
			return item;
		}
		return item;
	});
	return cartDispatch(increase(newCart));
};

export const decreaseCount = (id, cartDispatch, cart, showDrawer) => {
	let invalid = null;
	let newCart = [];
	const items = cart.map((item, index) => {
		if (item.id === id) {
			item.count -= 1;
			if (item.count <= 0) {
				invalid = index;
			}
			item.total = item.price * item.count;
			return item;
		}
		return item;
	});
	if (invalid !== null) {
		newCart = items.splice(invalid, 0);
		return cartDispatch(decrease({ cart: newCart, showDrawer: !showDrawer }));
	}
	return cartDispatch(decrease({ cart: items }));
};

export const addItem = (selectedItem, cart, cartDispatch, showDrawer) => {
	if (cart.length === 0) {
		return cartDispatch(
			addToCart({
				cart: [...cart, { ...selectedItem, count: 1, total: selectedItem.price }],
				showDrawer: !showDrawer
			})
		);
	}
	const tempCart = [...cart, { ...selectedItem, count: 1, total: selectedItem.price }];
	const items = tempCart.reduce((accumulator, current) => {
		if (!accumulator[current.id]) {
			accumulator[current.id] = current;
		} else {
			accumulator[current.id].count += 1;
			const { price, count } = accumulator[current.id];
			accumulator[current.id].total = price * count;
		}
		return accumulator;
	}, {});
	const newCart = Object.values(items);
	return cartDispatch(
		addToCart({
			cart: newCart,
			showDrawer: !showDrawer
		})
	);
};

export const subTotal = (cart, cartDispatch) => {
	let { total } = cart.reduce(
		(cartTotal, cartItem) => {
			const { price, count } = cartItem;
			const itemTotal = price * count;

			cartTotal.total += itemTotal;
			return cartTotal;
		},
		{
			total: 0
		}
	);
	total = parseFloat(total.toFixed(2));

	return cartDispatch(getTotal({ total }));
};

export const deleteItem = (id, cart, cartDispatch, showDrawer) => {
	const newCart = cart.filter(item => item.id !== id);
	if (newCart.length > 0) {
		return cartDispatch(removeItem({ cart: newCart }));
	}
	return cartDispatch(removeItem({ cart: newCart, showDrawer: !showDrawer }));
};

export const drawerToggle = cartDispatch => cartDispatch(toggleDrawer());

export const getProducts = (data, cartDispatch) => cartDispatch(productList(data));
export const changeCurrency = (currency, cartDispatch) => cartDispatch(changeProductCurrency({currency}));
