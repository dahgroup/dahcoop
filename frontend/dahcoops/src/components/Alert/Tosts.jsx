import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Slide, duration } from '@mui/material';
import { useState } from 'preact/hooks';

let setOpenSnackbar;
function Toast() {
	const [toast, setToast] = useState({
		open: false,
		message: '',
		severity: '',
		duration: 0,
	});

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setToast({ ...toast, open: false });
	};

	setOpenSnackbar = (message, severity, duration) => {
		setToast({ open: true, message, severity, duration });
	};

	function SlideTransition(props) {
		return <Slide {...props} direction='up' />;
	}

	return (
		<Snackbar
			open={toast.open}
			autoHideDuration={toast.duration}
			onClose={handleClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			TransitionComponent={SlideTransition}>
			<Alert
				elevation={6}
				variant='filled'
				icon={false}
				severity={toast.severity}
				sx={{
					px: 2,
					py: 0,
					borderRadius: 3,
					display: toast.open ? '' : 'none',
				}}>
				{toast.message}
			</Alert>
		</Snackbar>
	);
}

export function snackbar(message, severity = 'success', duration = 2000) {
	setOpenSnackbar(message, severity, duration);
}

export default Toast;
