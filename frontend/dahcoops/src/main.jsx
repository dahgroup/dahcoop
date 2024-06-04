import { render } from 'preact';
import { App } from './app.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.js';
import Toast from './components/Alert/Tosts.jsx';

render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<App />
			<Toast />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('app')
);
