import React from 'react';
import PropTypes from 'prop-types';


const BackDrop = ({toggleDrawer}) => {
    return <div className = 'backdrop' onClick={toggleDrawer}/>
}

BackDrop.propTypes = {
    toggleDrawer: PropTypes.func.isRequired
}
export default BackDrop
