import { useQuery, gql } from '@apollo/client';
import Queries from '../graphql/queries';
import { useCartDispatcher } from './useCartDispatcher';

export const useFetch = () => {
	const { currency } = useCartDispatcher();
	const { loading, data, error } = useQuery(
		gql`
			${Queries.FETCH_PRODUCTS(currency)}
		`
	);
	return [loading, data, error];
};
