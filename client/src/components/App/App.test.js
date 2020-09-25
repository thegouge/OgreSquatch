import React from 'react';
import { shallow } from 'enzyme';

import App from './index';
import { findElementByDataTest } from '../../lib/testFunctions';

describe('App Component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<App />);
	});

	it('Should render without crashing', () => {
		const wrapper = findElementByDataTest(component, 'AppComp');

		console.log(wrapper);

		expect(wrapper.length).toBe(1);
	});
});
