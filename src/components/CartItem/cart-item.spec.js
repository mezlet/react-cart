import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './index';
import { checkProps} from '../../testUtil';

const props = {
    item: {}, 
    addItem: jest.fn(), 
    symbol: ''
}

const setUp = (props = {}) => {
    const component = shallow(<CartItem {...props} />);
    return component;
}

describe('CartItem', () => {
    let component;
    beforeEach(() => {
        component = setUp(props);
    })
    it('should render without errors', () => {
        expect(component).toMatchSnapshot(); 
    });
    it('should render cart div', () => {
        const wrapper = component.find(`[data-test='cart-div']`);
        expect(wrapper.length).toBe(1); 
    })
    it('Checking PropTypes should not throw error', () => {
        const propErr = checkProps(CartItem, props);
        expect(propErr).toBeUndefined();
    })
})