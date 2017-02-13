import { createAction } from 'redux-actions';
import * as postViewConstants from './postViewConstants';
import * as placeholderApi from '../../api/placeholderApi';

export const getPostById = createAction(
	postViewConstants.GET_POST_BY_ID,
	placeholderApi.getPostById,
);