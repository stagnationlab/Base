import { PropTypes } from 'react';
import { handleActions } from 'redux-actions';
import * as postViewConstants from './postViewConstants';

export const postViewReducerProps = {
	post: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		body: PropTypes.string,
	}),
	postError: PropTypes.string,
	isPostLoading: PropTypes.bool.isRequired,
	comments: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		comment: PropTypes.string,
	})).isRequired,
};

const initialState = {
	post: null,
	isPostLoading: false,
	postError: null,
	comments: [],
	isCommentsLoading: false,
	commentsError: null,
};

export default handleActions({
	[postViewConstants.GET_POST_BY_ID]: (state, action) => {
		const {
			error,
			isLoading,
			payload,
		} = action;

		return {
			...state,
			isPostLoading: isLoading,
			postError: error,
			post: payload,
		};
	},

	[postViewConstants.GET_COMMENTS_BY_POST_ID]: (state, action) => {
		const {
			error,
			isLoading,
			payload,
		} = action;

		return {
			...state,
			isCommentsLoading: isLoading,
			commentsError: error,
			comments: Array.isArray(payload) ? payload : [],
		};
	},


	[postViewConstants.SAVE_COMMENT]: (state, action) => {
		const {
			isLoading,
			payload,
		} = action;

		if (isLoading || !payload || payload.id === undefined) {
			return state;
		}

		return {
			...state,
			comments: [
				...state.comments,
				payload,
			],
		};
	},
}, initialState);