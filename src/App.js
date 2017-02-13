import React from 'react';
import { Route } from 'react-router-dom';

import HomeView from './views/home/HomeView';
import PostView from './views/post/PostView';

export default () => (
	<div className="app">
		<Route exact path="/" component={HomeView} />
		<Route path="/post/:id" component={PostView} />
	</div>
);