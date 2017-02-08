import React from 'react';
import { Route, Link } from 'react-router-dom';

import HomeView from './views/home/HomeView';
import TestView from './views/test/TestView';

export default () => (
	<div className="app">
		<nav className="links">
			<Link to="/">Home</Link>{' | '}
			<Link to="/test">Test</Link>
		</nav>

		<Route exact path="/" component={HomeView} />
		<Route path="/test" component={TestView} />
	</div>
);