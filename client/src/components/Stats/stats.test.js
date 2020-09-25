import React from 'react';
import { shallow } from 'enzyme';

import Stats from './index';
import { findElementByDataTest } from '../../lib/testFunctions';

describe('Stats Component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Stats />);
	});
	it('Should render without crashing', () => {
		const wrapper = findElementByDataTest(component, 'statsComp');

		expect(wrapper.length).toBe(1);
	});
});
