import React, { useReducer } from 'react';
import {cartReducer, cartInitialState} from '../context/reducers/cart';


const useCombineReducer = () => {
    const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
    return  { 
      cartState, 
      cartDispatch 
  }
};

export { useCombineReducer };