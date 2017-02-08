import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store';

import './gfx/main.scss';
import App from './App';

const rootElement = document.getElementById('root');
const store = configureStore();

render(
	<AppContainer>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</AppContainer>,
	rootElement,
);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default; // eslint-disable-line global-require

		render(
			<AppContainer>
				<Provider store={store}>
					<Router>
						<NextApp />
					</Router>
				</Provider>
			</AppContainer>,
			rootElement,
		);
	});
}