import { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Queries from '../graphql/queries';
import { useCartDispatcher } from './useCartDispatcher';

export const useFetch = () => {
	const { currency, getProducts } = useCartDispatcher();
	const response = useQuery(
		gql`
			${Queries.FETCH_PRODUCTS(currency)}
		`
	);
	const { loading, data, error } = response;

	useEffect(() => {
		if (error) {
			getProducts({ error: error ? true : false });
		}
	}, [error]);

	useEffect(() => {
		if (data) {
			const { products, currency: currencies, error } = data;
			getProducts({ products, currencies, currency, error: error ? true : false });
		}
	}, [data, currency, error]);

	return { loading, error };
};
