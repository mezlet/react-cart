import React from 'react';
import { shallow } from 'enzyme';
import CurrencySelector from './index';
import { checkProps} from '../../testUtil';

const props = {
    currency: '', 
    currencies: [], 
    changeCurrency: jest.fn()
}

const setUp = (props = {}) => {
    const component = shallow(<CurrencySelector {...props} />);
    return component;
}

describe('CurrencySelector', () => {
    let component;
    beforeEach(() => {
        component = setUp(props);
    })
    it('should render without errors', () => {
        expect(component).toMatchSnapshot(); 
    });
    it('should render drop down button ', () => {
        const wrapper = component.find(`[data-test='item-selector']`);
        expect(wrapper.length).toBe(1); 
    })
    it('Checking PropTypes should not throw error', () => {
        const propErr = checkProps(CurrencySelector, props);
        expect(propErr).toBeUndefined();
    })
    it('should simulate currency change', () => {
        const e = {
            target: {
                value: 'USD'
            }
        }
        const button = component.find(`[data-test='item-selector']`);
        button.simulate('change', e);
        expect(props.changeCurrency.mock.calls.length).toBe(1);
    })
})