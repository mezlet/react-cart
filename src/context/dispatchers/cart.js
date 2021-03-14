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

export const increaseCount = (id, cartDispatch, cache) => {
	const newCache = { ...cache, [id]: cache[id] + 1 };
	return cartDispatch(increase({ cache: newCache }));
};

export const decreaseCount = (id, cartDispatch, cart, cache, showDrawer) => {
	let newCache;
	const count = cache[id] - 1;
	if (count === 0) {
		const cartIndex = cart.findIndex(item => item.id === id);
		const newCart = cart.splice(cartIndex, 0);
		newCache = { ...cache };
		delete newCache[id];
		return cartDispatch(
			decrease({
				cart: newCart,
				cache: newCache,
				showDrawer: !showDrawer
			})
		);
	}
	newCache = { ...cache, [id]: cache[id] - 1 };
	return cartDispatch(decrease({ cache: newCache }));
};

export const addItem = (selectedItem, cart, cache, cartDispatch, showDrawer) => {
	if (cache[selectedItem.id]) {
		return cartDispatch(
			addToCart({
				cache: { ...cache, [selectedItem.id]: cache[selectedItem.id] + 1 },
				showDrawer: !showDrawer
			})
		);
	}
	return cartDispatch(
		addToCart({
			cart: [...cart, { ...selectedItem }],
			showDrawer: !showDrawer,
			cache: { ...cache, [selectedItem.id]: 1 }
		})
	);
};

export const subTotal = (cart, cache, cartDispatch) => {
	let { total } = cart.reduce(
		(cartTotal, cartItem) => {
			const itemTotal = cartItem.price * cache[cartItem.id];
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

export const drawerToggle = (showDrawer, cartDispatch) => cartDispatch(toggleDrawer({ showDrawer: !showDrawer }));

export const getProducts = (data, cache, cartDispatch) => {
	const cartItems = Object.keys(cache);
	if(cartItems.length > 0) {
		data.cart = data.products.filter(item => cartItems.includes(`${item.id}`));
	}
	return cartDispatch(productList(data));
}

export const changeCurrency = (currency, cartDispatch) => cartDispatch(changeProductCurrency({ currency }));
