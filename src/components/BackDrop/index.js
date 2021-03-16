import React from 'react';
import PropTypes from 'prop-types';


const BackDrop = ({toggleDrawer}) => {
    
    return <div data-test='overlay' className = 'backdrop' onClick={toggleDrawer}/>
}

BackDrop.propTypes = {
    toggleDrawer: PropTypes.func.isRequired
}
export default BackDrop
