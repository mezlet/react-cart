import React from 'react';
import { shallow } from 'enzyme';
import DrawerHeader from './index';
import { checkProps} from '../../testUtil';

const props = {
    toggleDrawer: jest.fn()
}

const setUp = (props = {}) => {
    const component = shallow(<DrawerHeader {...props} />);
    return component;
}

describe('DrawerHeader', () => {
    let component;
    beforeEach(() => {
        component = setUp(props);
    })
    it('should render without errors', () => {
        expect(component).toMatchSnapshot(); 
    });
    it('should render close drawer button', () => {
        const wrapper = component.find(`[data-test='close-drawer-btn']`);
        expect(wrapper.length).toBe(1); 
    })
    it('Checking PropTypes should not throw error', () => {
        const propErr = checkProps(DrawerHeader, props);
        expect(propErr).toBeUndefined();
    })
    it('should toggle drawer', () => {
        const button = component.find(`[data-test='close-drawer-btn']`);
        button.simulate('click');
        expect(props.toggleDrawer.mock.calls.length).toBe(1);
    })
})