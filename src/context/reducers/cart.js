import * as types from '../actions/action_types';
export const cartInitialState = {
    showDrawer: false,
    cart: [],
    products: [],
    total: 0,
    currency: 'USD',
    currencies: [],
}


export const cartReducer = (state= cartInitialState, action) => {
    switch(action.type) {
        case types.TOGGLE_DRAWER: 
            return {
                ...state,
                showDrawer: !state.showDrawer
            }
        case types.INCREASE:
            return {
                ...state,
                cart: action.payload 
            }
        case types.PRODUCT_LIST:
        case types.ADD_ITEM:
        case types.DECREASE:
        case types.GET_TOTAL:
        case types.REMOVE_ITEM:
        case types.CHANGE_CURRENCY: 
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state;
    }

}