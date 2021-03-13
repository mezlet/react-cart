
export const cartInitialState = {
    showDrawer: false,
    cart: [],
    products: [],
    error: null,
    total: 0,
    currency: 'USD',
    currencies: [],
}


export const cartReducer = (state= cartInitialState, action) => {
    if(action.type === 'TOGGLE_DRAWER') {
        return { 
            ...state,
            showDrawer: !state.showDrawer
        }  
    }

    if(action.type === 'PRODUCT_LIST') {
        return {
            ...state,
            ... action.payload
        }
    }

    if(action.type === 'ADD_ITEM') {
        return {
            ...state,
            ...action.payload
        }
    }

    if(action.type === 'INCREASE') {
        return {
            ...state,
            cart: action.payload
        }
    }

    if(action.type === 'DECREASE') {
        return {
            ...state,
            ...action.payload
        }
    }

    if(action.type === 'GET_TOTAL') {
        return {
            ...state,
            ...action.payload
        }
    }

    if(action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            ...action.payload
        }
    }

    if(action.type === 'CHANGE_CURRENCY') {
        return {
            ...state,
            ...action.payload
        }
    }

}