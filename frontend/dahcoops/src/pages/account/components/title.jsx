import {
	AppRegistrationOutlined,
	PersonPinCircleOutlined,
} from '@mui/icons-material';
import { Tabs, Tab, Typography, Avatar } from '@mui/material';

export function Title({ action }) {
	const handleChange = (event, newValue) => {
		action.value = newValue;
	};

	return (
		<>
			<Typography
				align={'center'}
				color={'primary'}
				mt={8}
				letterSpacing={2}
				fontWeight={'bolder'}
				variant='h4'>
				WELCOME!!!
			</Typography>

			<Tabs
				value={action.value}
				onChange={handleChange}
				textColor='inherit'
				sx={{ mb: 1, mt: 4 }}
				indicatorColor='secondary'>
				<Tab
					iconPosition='start'
					icon={<PersonPinCircleOutlined />}
					sx={{
						width: '50%',
						minHeight: '36px',
						borderRadius: 1,
						bgcolor: action.value === 'LOGIN' ? 'secondary.main' : 'darkgray',
						color: action.value === 'LOGIN' ? 'white' : 'black',
					}}
					value='LOGIN'
					label='LOGIN'
				/>
				<Tab
					icon={<AppRegistrationOutlined />}
					sx={{
						width: '50%',
						minHeight: '36px',
						borderRadius: 1,
						bgcolor:
							action.value === 'REGISTER' ? 'secondary.main' : 'darkgray',
						color: action.value === 'REGISTER' ? 'white' : 'black',
					}}
					iconPosition='start'
					value='REGISTER'
					label='REGISTER'
				/>
			</Tabs>
		</>
	);
}
