import { Box, Typography } from '@mui/material';
import { Title } from './components/title';
import Login from './login/Login';
import Register from './register/Register';
import { useSignal } from '@preact/signals';

export function Account() {
	const action = useSignal('LOGIN');

	return (
		<Box
			m={2}
			display='flex'
			flexDirection='column'
			sx={{ position: 'relative', paddingBottom: '90px' }}>
			<Title action={action} />
			{action.value === 'REGISTER' ? <Register /> : <Login />}

			<Typography
				variant='caption'
				sx={{
					position: 'absolute',
					bottom: 0,
					left: '50%',
					transform: 'translateX(-50%)',
					textAlign: 'center',
					color: 'error.main',
					pointerEvents: 'none',
				}}>
				© From Dahcoops
			</Typography>
		</Box>
	);
}
