import React, { createContext } from 'react';
import { useCombineReducer } from '../hooks/useCombineReducer';

const AppContext = createContext();

const AppProvider = ({children}) => {
    const value = useCombineReducer();
    return (
        <AppContext.Provider value = {value}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
