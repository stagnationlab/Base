import { createAction } from 'redux-actions';
import { INCREMENT, DECREMENT, LOAD_API } from '../config/constants';
import { getTestData } from '../api/test';

export const increment = createAction(INCREMENT);

export const decrement = createAction(DECREMENT);

export const loadApi = createAction(
	LOAD_API,
	getTestData
);