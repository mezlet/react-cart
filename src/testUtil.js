import checkPropTypes from 'check-prop-types';

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
}