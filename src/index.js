import React from 'react';
import ReactDom from 'react-dom';

import './gfx/main.scss';

import configureStore from './src/configureStore';
import Root from './Root';


const rootElement = document.getElementById('root');
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
	window.store = store;

	const AppContainer = require('react-hot-loader').AppContainer; // eslint-disable-line global-require

	ReactDom.render(
		<AppContainer>
			<Root store={store} />
		</AppContainer>,
		rootElement
	);

	if (module.hot) {
		module.hot.accept('./Root', () => {
			const NextRoot = require('./Root').default; // eslint-disable-line global-require

			ReactDom.render(
				<AppContainer>
					<NextRoot store={store} />
				</AppContainer>,
				rootElement
			);
		});
	}

	// window.store = store;
} else {
	ReactDom.render(
		<Root store={store} />,
		rootElement
	);
}