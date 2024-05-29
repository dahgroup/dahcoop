import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import  { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme.js'


render(<BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>, document.getElementById('app'))
