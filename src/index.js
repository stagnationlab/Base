import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './src/configureStore';

import './gfx/main.scss';
import Root from './Root';


const rootElement = document.getElementById('root');
const store = configureStore();

render(
	<AppContainer>
		<Root store={store} />
	</AppContainer>,
	rootElement,
);

if (module.hot) {
	module.hot.accept('./Root', () => {
		const NextRoot = require('./Root').default; // eslint-disable-line global-require

		render(
			<AppContainer>
				<NextRoot store={store} />
			</AppContainer>,
			rootElement,
		);
	});
}