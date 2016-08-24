import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from '../config/constants';

const defaultState = { value: 0 };

export default handleActions({
	[INCREMENT]: (state, action) => ({
		...state,
		value: state.value + 1,
	}),
	[DECREMENT]: (state, action) => ({
		...state,
		value: state.value - 1,
	}),
}, defaultState);