import React from 'react'

const TopNav = () => {
    return (
        <div className='p-5 f-12'>
            <h1 className='px-5 text-secondary'>All Products</h1>
            <div className='d-flex justify-content-between'>
                <span className='px-5 text-secondary'>A 360 look at Lumin</span>
                <select name="" id="" className='pr-5'>
                    <option value="" className='text-secondary'>Filter By</option>
                </select>
            </div>
        </div>
    )
}

export default TopNav
