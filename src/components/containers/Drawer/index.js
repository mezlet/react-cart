import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import SelectedItems from '../../presentation/SelectedItems';
import { useCartDispatcher } from '../../../hooks/useCartDispatcher';
import DrawerHeader from '../../presentation/DrawerHeader';
import CurrencySelector from '../../presentation/CurrencySelector';
import DrawerFooter from '../../presentation/DrawerFooter';

const Drawer = () => {
	const {
		increase,
		decrease,
		toggleDrawer,
		showDrawer,
		cart,
		total,
		currency,
		currencies,
		removeItem,
		changeCurrency
	} = useCartDispatcher();
	const symbol = getSymbolFromCurrency(currency);

	return (
		<div className={showDrawer ? 'side-drawer open' : 'side-drawer'}>
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
							/>
						))}
					</div>
				)}
				<DrawerFooter symbol={symbol} total={total} />
			</div>
		</div>
	);
};

export default Drawer;
