import { createAction } from 'redux-actions';
import { INCREMENT, DECREMENT, LOAD_API } from '../homeViewConstants';
import { getTestData } from '../../../api/testApi';

export const increment = createAction(INCREMENT);

export const decrement = createAction(DECREMENT);

export const loadApi = createAction(
	LOAD_API,
	getTestData,
);