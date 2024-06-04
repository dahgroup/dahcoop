import {
	EmailOutlined,
	LockOutlined,
	Visibility,
	VisibilityOff,
} from '@mui/icons-material';
import {
	Button,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	TextField,
	CircularProgress,
} from '@mui/material';
import { useEffect, useState } from 'preact/hooks';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { loginRule, loginValues } from '../validation/validation';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import Api from '../../../utils/api/apiCall';

function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [currentUser, setCurrentUser] = useLocalStorage('currentUser');
	const [token, setToken] = useLocalStorage('token');
	const navigate = useNavigate();

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	const authenticate = async ({ email, password }) => {
		setLoading(true);

		try {
			const userData = await Api.post('login', { email, password });
			if (userData.status) {
				setCurrentUser(userData.data);
				setToken(userData.token);
				sessionStorage.setItem('auth', 'true');
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const isAuthenticated = sessionStorage.getItem('auth');
		if (isAuthenticated && isAuthenticated === 'true') {
			navigate('/teacher/dashboard');
		}
	}, [token]);

	return (
		<Formik
			initialValues={loginValues}
			validationSchema={loginRule}
			onSubmit={authenticate}
			validateOnMount={true}>
			{({ isValid, errors, touched }) => (
				<Form>
					<FormControl fullWidth>
						<Field
							as={TextField}
							label='Email'
							type='email'
							name='email'
							margin='normal'
							variant='standard'
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
							label='Password'
							name='password'
							type={showPassword ? 'text' : 'password'}
							margin='normal'
							variant='standard'
							fullWidth
							error={touched.password && !!errors.password}
							helperText={<ErrorMessage name='password' />}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<LockOutlined />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton onClick={handleTogglePassword} edge='end'>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<Grid item textAlign='right'>
							<Button
								href='#/forgotPassword'
								variant='text'
								sx={{ textTransform: 'none' }}>
								Forgot Password
							</Button>
						</Grid>
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
							Login
						</Button>
					</FormControl>
				</Form>
			)}
		</Formik>
	);
}

export default Login;
