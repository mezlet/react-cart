import React from 'react';
import PropTypes from 'prop-types';


const CurrencySelector = ({ currency, currencies, changeCurrency }) => {
	return (
		<select onChange={e => changeCurrency(e.target.value)}>
			<option value={currency}>
				{currency}
			</option>
			{currencies.map((currency, index) => (
				<option key={index} value={currency}>
					{currency}
				</option>
			))}
		</select>
	);
};

CurrencySelector.propTypes = {
	currency: PropTypes.string.isRequired,
	currencies: PropTypes.array.isRequired,
	changeCurrency: PropTypes.func.isRequired
}

export default CurrencySelector;
