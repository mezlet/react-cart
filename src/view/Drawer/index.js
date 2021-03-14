import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import SelectedItems from '../../components/SelectedItems';
import DrawerHeader from '../../components/DrawerHeader';
import CurrencySelector from '../../components/CurrencySelector';
import DrawerFooter from '../../components/DrawerFooter';
import Loader from '../../components/Loader';
import { useFetch } from '../../hooks/useFetch';
import { useCartDispatcher } from '../../hooks/useCartDispatcher';
import useToaster from '../../hooks/useToaster';

const Drawer = () => {
	const { loading } = useFetch();
	const {
		increase,
		decrease,
		toggleDrawer,
		showDrawer,
		cart,
		total,
		cache,
		currency,
		currencies,
		removeItem,
		changeCurrency,
		error
	} = useCartDispatcher();
	const {showError} = useToaster();

	const symbol = getSymbolFromCurrency(currency);

	return (
		<div className={showDrawer ? 'side-drawer open' : 'side-drawer'}>
			{loading && showDrawer ? (
				<Loader />
			) : (
				<div className='p-4 f-12' id='overflow'>
					<DrawerHeader toggleDrawer={toggleDrawer} />
					<CurrencySelector changeCurrency={changeCurrency} currencies={currencies} currency={currency} />
					{cart && (
						<div className='select-items'>
							{cart.map(item => (
								<SelectedItems
									key={item.id}
									item={item}
									increase={() => increase(item.id)}
									decrease={() => decrease(item.id)}
									removeItem={() => removeItem(item.id)}
									symbol={symbol}
									cache={cache}
								/>
							))}
						</div>
					)}
					<DrawerFooter symbol={symbol} total={total} />
				</div>
			)}
		</div>
	);
};

export default Drawer;
