import { useNavigate } from 'react-router-dom';
import { ToWords } from 'to-words';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import _ from 'lodash';
import isReachable from 'is-reachable';

export const isNumber = (event) => {
	const keyPressed = String.fromCharCode(event.keyCode);
	if (!_.isNumber(Number(keyPressed))) {
		event.preventDefault();
		return false;
	}
	return true;
};

export default function GoBack() {
	const navigate = useNavigate();

	const goBack = () => {
		if (window.history.length > 1) {
			navigate(-1);
		} else {
			navigate('/');
		}
	};

	return { goBack };
}

export const wordCurrecncy = (num) => {
	const toWords = new ToWords({
		localeCode: 'en-IN',
		converterOptions: {
			currency: true,
			ignoreDecimal: false,
			ignoreZeroCurrency: false,
			doNotAddOnly: false,
			currencyOptions: {
				name: 'Naira',
				plural: 'Nairas',
				symbol: '₦',
				fractionalUnit: {
					name: 'Kobo',
					plural: 'Kobo',
					symbol: '',
				},
			},
		},
	});

	return toWords.convert(num);
};

export function currency(num) {
	return new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'NGN',
		maximumFractionDigits: 2,
	}).format(num);
}

export function formatDate(timestamp) {
	dayjs.extend(relativeTime);
	const date = dayjs(timestamp);
	return date.fromNow();
}

export function dateTime(timestamp) {
	const date = dayjs(timestamp);
	return date.format('YYYY-MM-DD HH:mm:ss');
}

export function time(timestamp) {
	const date = dayjs(timestamp);
	return date.format('HH:mm:ss');
}

export function date(timestamp) {
	const date = dayjs(timestamp);
	return date.format('YYYY-MM-DD');
}

export function truncateText(label, maxLength = 20) {
	return _.truncate(label, { length: maxLength });
}

//check if user is connected
export async function network() {
	return await isReachable('https://www.google.com/favicon.ico');
}
