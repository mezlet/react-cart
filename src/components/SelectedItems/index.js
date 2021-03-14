import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const SelectedItems = ({item, increase, decrease, removeItem, symbol, cache }) => {
    return (
        <div className='bg-white my-2 p-3'>
            <div className='d-flex justify-content-between'>
                <h6>{item.title}</h6>
                <Button className="close" onClick={removeItem}>
                    <span aria-hidden="true">&times;</span>
                </Button>
            </div>

            <div className='my-3 px-5 d-flex justify-content-end'>
                <img src={item.image_url} alt=""  width='20' height='20' />
            </div>

            <div className='d-flex my-3'>
                <ButtonGroup size='sm' >
                    <Button variant="light" onClick={decrease}>-</Button>
                    <Button variant="light" className='amount button'>{cache[item.id]}</Button>
                    <Button variant="light" onClick={increase}>+</Button>
                </ButtonGroup>
                <div className='mx-5 px-5'>{symbol}{Number(item.price) * Number(cache[item.id])}</div>
            </div>
        </div>
    )
}

export default SelectedItems
