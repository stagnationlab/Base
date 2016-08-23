import { handleActions } from 'redux-actions';

const defaultState = { value: 0 };

export default handleActions({
	INCREMENT: (state, action) => ({
		value: ++state.value,
	}),
	DECREMENT: (state, action) => ({
		value: --state.value,
	}),
}, defaultState);