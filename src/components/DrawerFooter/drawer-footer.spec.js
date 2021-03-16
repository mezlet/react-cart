import React from 'react';
import { shallow } from 'enzyme';
import DrawerFooter from './index';
import { checkProps} from '../../testUtil';

const props = {
    symbol: '', 
    total: 0
}

const setUp = (props = {}) => {
    const component = shallow(<DrawerFooter {...props} />);
    return component;
}

describe('DrawerFooter', () => {
    let component;
    beforeEach(() => {
        component = setUp(props);
    })
    it('should render without errors', () => {
        expect(component).toMatchSnapshot(); 
    });
    it('should render subtotal div element', () => {
        const wrapper = component.find(`[data-test='subtotal-div']`);
        expect(wrapper.length).toBe(1); 
    })
    it('Checking PropTypes should not throw error', () => {
        const propErr = checkProps(DrawerFooter, props);
        expect(propErr).toBeUndefined();
    })
})