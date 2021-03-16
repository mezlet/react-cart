import React from 'react';
import { shallow } from 'enzyme';
import SelectedItems from './index';
import { checkProps} from '../../testUtil';

const props = {
    item: {}, 
    increase: jest.fn(), 
    decrease: jest.fn(), 
    removeItem: jest.fn(), 
    symbol: '', 
    cache: {}
}

const setUp = (props = {}) => {
    const component = shallow(<SelectedItems {...props} />);
    return component;
}

describe('SelectedItems', () => {
    let component;
    beforeEach(() => {
        component = setUp(props);
    })
    it('should render without errors', () => {
        expect(component).toMatchSnapshot(); 
    });
    it('should render close button', () => {
        const wrapper = component.find(`[data-test='remove-item']`);
        expect(wrapper.length).toBe(1); 
    });
    it('should render product image', () => {
        const wrapper = component.find(`[data-test='product-image']`);
        expect(wrapper.length).toBe(1); 
    });
    it('should render button group', () => {
        const wrapper = component.find(`[data-test='cart-button-group']`);
        expect(wrapper.length).toBe(1); 
    });
    it('Checking PropTypes should not throw error', () => {
        const propErr = checkProps(SelectedItems, props);
        expect(propErr).toBeUndefined();
    });
    it('should remove item from cart', () => {
        const button = component.find(`[data-test='remove-item']`);
        button.simulate('click');
        expect(props.removeItem.mock.calls.length).toBe(1);
    })
})