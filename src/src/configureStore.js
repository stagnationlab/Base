import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-loading-promise-middleware';

import * as reducers from '../reducers';

export default function configureStore(initialState) {
	return createStore(
		combineReducers({
			...reducers,
		}),
		initialState,
		compose(
			applyMiddleware(thunkMiddleware),
			applyMiddleware(promiseMiddleware)
		)
	);
}