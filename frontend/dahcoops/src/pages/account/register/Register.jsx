import { DateRange, EmailOutlined } from '@mui/icons-material';
import {
	Alert,
	Button,
	CircularProgress,
	FormControl,
	InputAdornment,
	TextField,
} from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';

function Register() {
	const [loading, setLoading] = useState(false);

	const checkNewMember = async ({ email, dob }) => {
		setLoading(true);

		try {
			const userData = await Api.get(`email-checker/${email}/${dob}`);
			if (userData.status) {
				console.log(userData);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Alert sx={{ mt: 1 }} color='info' severity='info'>
				To continue your registration please supply your email
			</Alert>
			<Formik
				initialValues={registerValues}
				validationSchema={registerRule}
				onSubmit={checkNewMember}
				validateOnMount={true}>
				{({ isValid, errors, touched }) => (
					<Form>
						<FormControl fullWidth>
							<Field
								as={TextField}
								required
								label='Email'
								type='email'
								name='email'
								margin='normal'
								variant='filled'
								error={touched.email && !!errors.email}
								helperText={<ErrorMessage name='email' />}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<EmailOutlined />
										</InputAdornment>
									),
								}}
							/>

							<Field
								as={TextField}
								required
								label='Date of birth'
								type='date'
								name='dob'
								margin='normal'
								variant='filled'
								error={touched.dob && !!errors.dob}
								helperText={<ErrorMessage name='dob' />}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<DateRange />
										</InputAdornment>
									),
								}}
							/>

							<Button
								type='submit'
								variant='contained'
								sx={{
									color: '#fff',
									mt: 1,
								}}
								size='large'
								startIcon={loading ? <CircularProgress size={20} /> : null}
								disabled={loading || !isValid}>
								Submit
							</Button>
						</FormControl>
					</Form>
				)}
			</Formik>
		</>
	);
}
import { useState } from 'preact/hooks';
import { registerRule, registerValues } from '../validation/validation';
import Api from '../../../utils/api/apiCall';

export default Register;
