// Determine the environment based on the existence of a function in the Android JS interface
// @ts-ignore
const isProduction = typeof Android !== 'undefined';
const env = isProduction ? 'production' : 'development';

const defaultSettings = {
	environment: env,
	apiBase:
		env === 'production'
			? 'https://mobile.dahcoops.com.ng/api/v1/'
			: 'http://mobile.dahcoops.com.ng/api/v1/',
	settings: {},
};

export const loadLocalStorage = (key) => {
	const value = localStorage.getItem(key);
	return value ? JSON.parse(value) : null;
};

export const config = {
	...defaultSettings,
	settings: loadLocalStorage('settings') || {},
};

export const httpOptions = {
	maxRetries: 3,
	retryDelay: 10000,
	timeout: 20000,
};
