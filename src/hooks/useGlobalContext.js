import { useContext } from 'react';
import { AppContext } from '../context/Provider';

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext }
