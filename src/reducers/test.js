import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT, LOAD_API } from '../config/constants';

const defaultState = {
	value: 0,
	isLoading: false,
	data: null,
	error: null,
};

export default handleActions({
	[INCREMENT]: (state) => ({
		...state,
		value: state.value + 1,
	}),
	[DECREMENT]: (state) => ({
		...state,
		value: state.value - 1,
	}),
	[LOAD_API]: (state, { payload }) => ({
		...state,
		isLoading: payload.isLoading,
		data: payload.info ? payload.info.data : null,
		error: payload.error ? payload.error.data : null,
	})
}, defaultState);