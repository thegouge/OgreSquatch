import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';
import { findElementByDataTest } from '../../lib/testFunctions';

describe('Header Component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Header />);
	});
	it('Should render without crashing', () => {
		const wrapper = findElementByDataTest(component, 'headerComp');

		expect(wrapper.length).toBe(1);
		s;
	});
});
