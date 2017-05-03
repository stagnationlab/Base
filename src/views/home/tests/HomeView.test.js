import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { HomeView } from '../HomeView';

const props = {
	error: null,
	isLoading: false,
	posts: [
		{
			id: 1,
			title: 'test 1',
			body: 'test content 1',
		},
		{
			id: 2,
			title: 'test 2',
			body: 'test content 2',
		},
	],
	getPostsByUserId: jest.fn(),
};

const wrapper = mount(
	<MemoryRouter>
		<HomeView {...props} />
	</MemoryRouter>,
);

describe('HomeView', () => {
	it('renders correctly', () => {
		expect(toJson(wrapper.find('HomeView'))).toMatchSnapshot();
	});
});