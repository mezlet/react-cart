import React from 'react';
import PropTypes from 'prop-types';
import AddItemButton from '../../components/AddItemButton';

const CartItem = ({ item, addItem, symbol }) => {
	return (
		<div className='d-flex justify-content-center ' data-test='cart-div'>
            <div className='my-3 '>
                <img src={item.image_url} alt='' width="125" height="100" className='m-5' />
                <div  className='text-center'>
                    <span className='d-block'>{item.title}</span>
                    <span className='d-block px-4 mx-2'>
                        From {symbol}
                        {item.price}
                    </span>
                    <AddItemButton  item={item} click={() => addItem(item)} />
                </div>

            </div>
		</div>
	);
};

CartItem.propTypes = {
	item: PropTypes.object.isRequired,
	symbol: PropTypes.string.isRequired,
	addItem: PropTypes.func.isRequired
}
export default CartItem;
