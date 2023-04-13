import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

// axios instance
export const api = axios.create({
	baseURL: API_URL,
});

// fakeStore.interceptors.request.use((config) => {
// 	config.headers['Content-Type'] = 'application/json';
// 	config.headers['X-Auth-Token'] = 'Bearer token';
// 	return config;
// });

// enum HTTPStatus {
// 	UNAUTHORIZED = 401,
// 	FORBIDDEN = 403,
// 	BAD_REQUEST = 400,
// 	NOT_FOUND = 404,
// 	OK = 200,
// 	CREATED = 201,
// 	NOT_CHANGED = 304,
// }

// fakeStore.interceptors.response.use((res) => {
// 	if (res.status === HTTPStatus.UNAUTHORIZED) {
// 		// refreshToken();
// 	} else if (res.status === HTTPStatus.FORBIDDEN) {
// 		// showNotification('You are not allowed to do this action');
// 	}
// 	return res;
// });
