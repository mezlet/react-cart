import { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Queries from '../graphql/queries';
import { useCartDispatcher } from './useCartDispatcher';

export const useFetch = () => {
	const { currency, getProducts } = useCartDispatcher();
	const { loading, data, error } = useQuery(
		gql`
			${Queries.FETCH_PRODUCTS(currency)}
		`
	);

	useEffect(() => {
		if (data) {
			const { products, currency: currencies } = data;
			getProducts({ products, currencies, currency });
		}
	}, [data, currency]);
	
	
	return { loading, error };
};
