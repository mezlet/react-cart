import * as types from '../actions/action_types';
import { cartReducer } from './cart';

describe('Cart Reducer', () => {
    let initialState
    beforeEach(() => {
        initialState = {
			showDrawer: false,
			cart: [],
			products: [],
			total: 0,
			currency: 'USD',
			currencies: [],
			cache: {},
			error: false
		}
    })
	it('should return default state', () => {
		const newState = cartReducer(undefined, {});
		expect(newState).toEqual(initialState);
    });

    it('should handle TOGGLE_DRAWER', () => {
		const newState = cartReducer(undefined, {
            type: types.TOGGLE_DRAWER,
            payload: { showDrawer: true }
        });
        expect(newState).toEqual({ ...initialState, showDrawer: true })
    });

    it('should handle INCREASE', () => {
        const cache = {1: 3};
		const newState = cartReducer(undefined, {
            type: types.INCREASE,
            payload: { cache }
        });
        expect(newState).toEqual({ ...initialState, cache })
    });
    
    it('should handle PRODUCT_LIST', () => {
        const products = [{id: 1, title: 'first title'}];
        const currencies = ['USD', 'NGN'];
		const newState = cartReducer(undefined, {
            type: types.PRODUCT_LIST,
            payload: { products, currencies }
        });
        expect(newState).toEqual({ ...initialState, products, currencies })
    });
    it('should handle ADD_ITEM', () => {
        const cart = [{id: 1, title: 'first title'}];
		const newState = cartReducer(undefined, {
            type: types.PRODUCT_LIST,
            payload: { cart }
        });
        expect(newState).toEqual({ ...initialState, cart })
    });
    it('should handle DECREASE', () => {
        const cache = {1: 2};
		const newState = cartReducer(undefined, {
            type: types.DECREASE,
            payload: { cache }
        });
        expect(newState).toEqual({ ...initialState, cache })
    });
    it('should handle GET_TOTAL', () => {
        const total = 5;
		const newState = cartReducer(undefined, {
            type: types.GET_TOTAL,
            payload: { total }
        });
        expect(newState).toEqual({ ...initialState, total })
    });
    it('should handle REMOVE_ITEM', () => {
        const cart = [];
		const newState = cartReducer(undefined, {
            type: types.REMOVE_ITEM,
            payload: { cart }
        });
        expect(newState).toEqual({ ...initialState, cart })
    });
    it('should handle CHANGE_CURRENCY', () => {
        const currency = 'NGN';
		const newState = cartReducer(undefined, {
            type: types.CHANGE_CURRENCY,
            payload: { currency }
        });
        expect(newState).toEqual({ ...initialState, currency })
	});
});
