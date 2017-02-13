function request(method, url, body) {
	const headers = new Headers();
	const init = {
		headers,
		method,
	};

	if (body !== undefined) {
		init.body = JSON.stringify(body);
	}

	return fetch(`${process.env.APP_API_URL}${url}`, init)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}

			throw new Error(response.status);
		})
		.catch(error => Promise.reject(error.message));
}

export function get(url) {
	return request('GET', url);
}

export function post(url, body) {
	return request('POST', url, body);
}