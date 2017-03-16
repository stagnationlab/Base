import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import promiseMiddleware from 'redux-loading-promise-middleware';
import promiseMiddleware from './services/promiseMiddleware';

// reducers
import homeViewReducer from './views/home/homeViewReducer';
import postViewReducer from './views/post/postViewReducer';

export default function configureStore(initialState) {
	return createStore(
		combineReducers({
			homeViewReducer,
			postViewReducer,
		}),
		initialState,
		compose(
			applyMiddleware(thunkMiddleware),
			applyMiddleware(promiseMiddleware),
			process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f,
		),
	);
}