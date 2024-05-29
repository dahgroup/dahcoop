import { Box, Button, FormControl, InputAdornment, TextField, Typography } from '@mui/material'
import { Title } from '../components/title'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
import LockOutlined from '@mui/icons-material/LockOutlined'

export function Account() {
    return (
        <>
            <Box
                display="flex"
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >

                <Title />
                {/* Buttons */}
                <Box flexDirection="row">
                    <Button 
                        variant="contained"
                        sx={{
                            color:'#fff',
                            m: 1,
                            mt: 5,
                        }}
                        size='large'>
                            LOGIN
                    </Button>

                    <Button 
                        variant="outlined" 
                        sx={{
                            m: 1,
                            mt: 5,
                        }}
                        size='large'>
                            REGISTER
                    </Button>
                </Box>
                {/* Login Form */}
                <FormControl>
                    <TextField
                        required
                        id="standard-required"
                        label="Email"
                        type="email"
                        variant="standard"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <EmailOutlined />
                            </InputAdornment>
                            ),
                        }}
                        sx={{
                            m: 3,
                        }}
                        />
                    <TextField
                        required
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlined />
                            </InputAdornment>
                            ),
                        }}
                        sx={{
                            m: 3,
                        }}
                    />
                    <Button 
                        variant="contained"
                        sx={{
                            color:'#fff',
                            mt: 5,
                        }}
                        size='large'>
                            LOGIN
                    </Button>
                </FormControl>
            </Box>
        </>
    )
}