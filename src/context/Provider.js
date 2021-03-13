import React, { createContext, useEffect } from 'react';
import { useCombineReducer } from '../hooks/useCombineReducer';

const AppContext = createContext();

const AppProvider = ({children}) => {
    const value = useCombineReducer();
    useEffect(() => {
    }, []);
    return (
        <AppContext.Provider value = {value}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
