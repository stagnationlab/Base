import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-loading-promise-middleware';

// reducers
import homeViewReducer from './views/home/reducers/homeViewReducer';

export default function configureStore(initialState) {
	return createStore(
		combineReducers({
			homeViewReducer,
		}),
		initialState,
		compose(
			applyMiddleware(thunkMiddleware),
			applyMiddleware(promiseMiddleware),
			process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f,
		)
	);
}