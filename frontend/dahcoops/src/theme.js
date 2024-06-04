import { createTheme } from '@mui/material';
import './style.css';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#049DBF',
		},
		secondary: {
			main: '#11BF9F',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'capitalize',
				},
			},
		},
	},
});
