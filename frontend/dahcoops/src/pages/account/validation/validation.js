import * as Yup from 'yup';

export const loginRule = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	password: Yup.string()
		.matches(/^[0-9]{6}$/, 'Password must be exactly 6 digits')
		.required('Password is required'),
});

export const loginValues = {
	email: '',
	password: '',
};

export const registerRule = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	dob: Yup.date().required('Date of Birth is required').nullable(),
});

export const registerValues = {
	email: '',
	dob: '',
};
