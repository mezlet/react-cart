import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

const DrawerFooter = ({ symbol, total }) => {
	return (
		<div className='drawer_footer px-3 py-3'>
			<div className='d-flex justify-content-between'>
                <span >SubTotal:</span>
                <span className='px-5'>{symbol}{total}</span>
			</div>
            <Button className='my-2 mr-5 pr-5 f12 rounded-0' variant="outline-secondary" size="lg" block>
                MAKE THIS A SUBSCRIPTION(SAVE 20%)
            </Button>
            <Button className='my-2 mr-5 pr-5 custom-green f12'  size="lg" block>
                PROCEED TO CHECKOUT
            </Button>
		</div>
	);
};

DrawerFooter.propTypes = {
	symbol: PropTypes.string.isRequired,
	total: PropTypes.number.isRequired
}
export default DrawerFooter;
