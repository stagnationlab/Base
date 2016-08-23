import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import Root from './Root';
import { AppContainer } from 'react-hot-loader';

import './gfx/main.scss';
/*
 // srcroll page to top when url changes
 let prevLocation = {};
 browserHistory.listenBefore(location => {
 const pathChanged = prevLocation.pathname !== location.pathname;
 const hashChanged = prevLocation.hash !== location.hash;

 if (pathChanged || hashChanged) window.scrollTo(0, 0);
 prevLocation = location;
 });
 */

if (process.env.NODE_ENV !== 'production') {
	// const hotloader = require('react-hot-loader'); // eslint-disable-line global-require
	// console.log(hotloader);

	// const AppContainer = hotloader.AppContainer;

	ReactDom.render(
		<AppContainer>
			<Root />
		</AppContainer>,
		document.getElementById('root')
	);

	if (module.hot) {
		module.hot.accept('./Root', () => {
			const NextRoot = require('./Root').default; // eslint-disable-line global-require

			ReactDom.render(
				<AppContainer>
					<NextRoot />
				</AppContainer>,
				document.getElementById('root')
			);
		});
	}

	// window.store = store;
} else {
	ReactDom.render(
		<Router history={browserHistory} routes={routes}/>,
		document.getElementById('root')
	);
}