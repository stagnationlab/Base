import { createAction } from 'redux-actions';
import * as postViewConstants from './postViewConstants';
import * as placeholderApi from '../../api/placeholderApi';

export const getPostById = createAction(
	postViewConstants.GET_POST_BY_ID,
	placeholderApi.getPostById,
);

export const getCommentsyPostId = createAction(
	postViewConstants.GET_COMMENTS_BY_POST_ID,
	placeholderApi.getCommentsyPostId,
);

export const saveComment = createAction(
	postViewConstants.SAVE_COMMENT,
	placeholderApi.saveComment,
);