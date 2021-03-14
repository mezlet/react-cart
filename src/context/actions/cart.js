import * as types from './action_types';

export const toggleDrawer = (payload) => ({ type: types.TOGGLE_DRAWER, payload });

export const addToCart = payload => ({ type: types.ADD_ITEM, payload });

export const productList = payload => ({ type: types.PRODUCT_LIST, payload });

export const increase = payload => ({ type: types.INCREASE, payload });

export const decrease = payload => ({ type: types.DECREASE, payload });

export const getTotal = payload => ({ type: types.GET_TOTAL, payload });

export const removeItem = payload => ({ type: types.REMOVE_ITEM, payload });

export const changeProductCurrency = payload => ({ type: types.CHANGE_CURRENCY, payload });

