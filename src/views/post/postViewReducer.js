import { handleActions } from 'redux-actions';
import * as postViewConstants from './postViewConstants';

const initialState = {
	post: null,
	isPostLoading: false,
	error: null,
};

export default handleActions({
	[postViewConstants.GET_POST_BY_ID]: (state, action) => {
		const {
			error,
			isLoading: isPostLoading,
			payload: post,
		} = action;

		return {
			...state,
			isPostLoading,
			error,
			post,
		};
	},
}, initialState);