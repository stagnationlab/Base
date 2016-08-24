import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from '../libs/redux-promise-loading-middleware/index';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import * as reducers from './reducers';

const store = createStore(
	combineReducers({
		...reducers
	}),
	compose(
		applyMiddleware(thunkMiddleware),
		applyMiddleware(promiseMiddleware)
	),
);

export default class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory} routes={routes} />
			</Provider>
		);
	}
}
