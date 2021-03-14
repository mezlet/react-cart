import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap'

const AddItemButton = ({click}) => {
    return (
        <Button className="mt-2 mx-3 custom-green" size="md" onClick={click}>Add to cart</Button>
    )
}

AddItemButton.propTypes = {
    click: PropTypes.func.isRequired
}
export default AddItemButton
