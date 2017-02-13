import { get } from '../services/fetchService';

export function getPostsByUserId(id) {
	return get(`posts?userId=${id}`);
}

export function getPostById(id) {
	return get(`posts/${id}`);
}