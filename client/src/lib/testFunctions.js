import checkPropTypes from 'check-prop-types';

export const findElementByDataTest = (component, dataTest) => {
	return component.find(`[data-test="${dataTest}"]`);
};

export const checkProps = (propInterface, componentName, expectedProps) => {
	return checkPropTypes(propInterface, expectedProps, 'props', componentName);
};
