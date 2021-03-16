import React from 'react';
import { shallow } from 'enzyme';
import MainNav from './index';
import { checkProps} from '../../testUtil';

const props = {
    cart: [], 
    toggleDrawer: jest.fn()
}

const setUp = (props = {}) => {
    const component = shallow(<MainNav {...props} />);
    return component;
}

describe('MainNav', () => {
    let component;
    beforeEach(() => {
        component = setUp(props);
    })
    it('should render without errors', () => {
        expect(component).toMatchSnapshot(); 
    });
    it('should render button', () => {
        const wrapper = component.find(`[data-test='main-nav-bar']`);
        expect(wrapper.length).toBe(1); 
    })
    it('should render cart icon', () => {
        const wrapper = component.find(`[data-test='cart-icon']`);
        expect(wrapper.length).toBe(1); 
    })
    it('Checking PropTypes should not throw error', () => {
        const propErr = checkProps(MainNav, props);
        expect(propErr).toBeUndefined();
    })
    it('should toggle drawer', () => {
        const button = component.find(`[data-test='cart-icon']`);
        button.simulate('click');
        expect(props.toggleDrawer.mock.calls.length).toBe(1);
    })
})