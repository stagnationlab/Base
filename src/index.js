import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';

import './gfx/main.scss';

const rootElement = document.getElementById('root');

if (process.env.NODE_ENV !== 'production') {
	const AppContainer = require('react-hot-loader').AppContainer; // eslint-disable-line global-require

	ReactDom.render(
		<AppContainer>
			<Root />
		</AppContainer>,
		rootElement
	);

	if (module.hot) {
		module.hot.accept('./Root', () => {
			const NextRoot = require('./Root').default; // eslint-disable-line global-require

			ReactDom.render(
				<AppContainer>
					<NextRoot />
				</AppContainer>,
				rootElement
			);
		});
	}

	// window.store = store;
} else {
	ReactDom.render(
		<Root />,
		rootElement
	);
}