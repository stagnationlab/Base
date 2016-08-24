import { createAction } from 'redux-actions';
import { INCREMENT, DECREMENT } from '../config/constants';

export const increment = createAction(INCREMENT);

export const decrement = createAction(DECREMENT);