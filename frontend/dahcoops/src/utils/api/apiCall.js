import { config, httpOptions } from '../config/configuration.js';
import { snackbar } from '../../components/Alert/Tosts.jsx';

const activeRequests = new Set();
const baseUrl = config.apiBase;

const createRequestKey = (method, url, data) => {
	return `${method}-${url}-${JSON.stringify(data)}`;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Api = {
	request: async (method, url, data = {}, options = {}) => {
		const token = JSON.parse(localStorage.getItem('token'));
		if (!window.navigator.onLine) {
			snackbar('No internet access', 'error');
			return;
		}

		const defaultHeaders = {
			Client: 'mesl',
			Credentials: token ?? '',
		};

		const {
			headers: customHeaders = {},
			timeout = httpOptions.timeout,
			retries = httpOptions.maxRetries,
			retryDelay = httpOptions.retryDelay,
			transformRequest = (data) => {
				if (!(data instanceof FormData)) {
					return JSON.stringify(data);
				}
				return data;
			},
		} = options;

		const headers = { ...defaultHeaders, ...customHeaders };

		const requestOptions = {
			method,
			headers,
			body: method !== 'GET' ? transformRequest(data) : null,
		};

		const abortController = new AbortController();
		requestOptions.signal = abortController.signal;

		let attempts = 0;
		let response;

		const requestKey = createRequestKey(method, url, data);

		if (activeRequests.has(requestKey)) {
			return Promise.reject(new Error('Duplicate request'));
		}

		activeRequests.add(requestKey);

		while (attempts <= retries) {
			try {
				response = await Promise.race([
					fetch(url, requestOptions),
					new Promise((_, reject) =>
						setTimeout(() => reject(new Error('Request timeout')), timeout)
					),
				]);
				break;
			} catch (error) {
				if (error.name === 'AbortError') {
					snackbar('Connection Aborted', 'error');
					return;
				}

				if (attempts >= retries) {
					snackbar('error', `Request Timeout ${error.message}`);
					return;
				}

				attempts++;
				snackbar('error', `Retrying (${attempts}/${retries}) please wait...`);
				await delay(retryDelay);
			} finally {
				activeRequests.delete(requestKey);
			}
		}

		const contentType = response.headers.get('Content-Type');
		let responseData;

		if (contentType?.includes('application/json')) {
			responseData = await response.json();
		} else {
			responseData = await response.text();
		}

		return Api.checkResponseStatus(response, responseData);
	},

	get: (url, data = {}, options = {}) =>
		Api.request('GET', baseUrl + url, data, options),

	post: (url, data = {}, options = {}) =>
		Api.request('POST', baseUrl + url, data, options),

	put: (url, data = {}, options = {}) =>
		Api.request('PUT', baseUrl + url, data, options),

	update: (url, data = {}, options = {}) =>
		Api.request('UPDATE', baseUrl + url, data, options),

	delete: (url, data = {}, options = {}) =>
		Api.request('DELETE', baseUrl + url, data, options),

	checkResponseStatus: (response, responseData) => {
		if (response.status >= 200 && response.status < 300) {
			return responseData;
		} else {
			if (response.status === 403) {
				localStorage.setItem('auth', 'false');
				snackbar('Session expired. Please log in again.', 'info');
				window.location.href = '/teacherLogin';
				return false;
			} else {
				if (responseData.message === 'undefine') {
					snackbar(`Somethings went wrong`, 'error');
					console.error('Error:', responseData);
				}
				snackbar(`${responseData.message}`, 'error');
				console.error('Error:', responseData);
				return false;
			}
		}
	},
};

export default Api;
