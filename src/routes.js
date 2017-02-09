import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomeView from './views/home/HomeView';
import TestView from './views/test/TestView';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeView} />
		<Route path="test" component={TestView} />
	</Route>
);