import React from 'react';
import { shallow } from 'enzyme';
import TopNav from './index';
import { checkProps} from '../../testUtil';

const props = {}

const setUp = (props = {}) => {
    const component = shallow(<TopNav {...props} />);
    return component;
}

describe('TopNav', () => {
    let component;
    beforeEach(() => {
        component = setUp(props);
    })
    it('should render without errors', () => {
        expect(component).toMatchSnapshot(); 
    });
    it('should render top nav div', () => {
        const wrapper = component.find(`[data-test='top-nav-div']`);
        expect(wrapper.length).toBe(1); 
    });
})