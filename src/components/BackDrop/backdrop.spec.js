import React from 'react';
import { shallow } from 'enzyme';
import BackDrop from './index';
import { checkProps} from '../../testUtil';

const props = {
    toggleDrawer: jest.fn()
}

const setUp = (props = {}) => {
    const component = shallow(<BackDrop {...props} />);
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
    it('should render overlay', () => {
        const wrapper = component.find(`[data-test='overlay']`);
        expect(wrapper.length).toBe(1); 
    })
    it('Checking PropTypes should not throw error', () => {
        const propErr = checkProps(BackDrop, props);
        expect(propErr).toBeUndefined();
    })
    it('should toggle drawer component', () => {
        const button = component.find(`[data-test='overlay']`);
        button.simulate('click');
        expect(props.toggleDrawer.mock.calls.length).toBe(1);
    })
})