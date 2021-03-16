import React from 'react';
import { shallow } from 'enzyme';
import AddItemButton from './index';
import { checkProps} from '../../testUtil';

const props = {
    click: jest.fn()
}

const setUp = (props = {}) => {
    const component = shallow(<AddItemButton {...props} />);
    return component;
}

describe('AddItemButton', () => {
    let component;
    beforeEach(() => {
        component = setUp(props);
    })
    it('should render without errors', () => {
        expect(component).toMatchSnapshot(); 
    });
    it('should render button', () => {
        const wrapper = component.find(`[data-test='add-item-button']`);
        expect(wrapper.length).toBe(1); 
    })
    it('Checking PropTypes should not throw error', () => {
        const propErr = checkProps(AddItemButton, props);
        expect(propErr).toBeUndefined();
    })
    it('should render click', () => {
        const button = component.find(`[data-test='add-item-button']`);
        button.simulate('click');
        expect(props.click.mock.calls.length).toBe(1);
    })
})