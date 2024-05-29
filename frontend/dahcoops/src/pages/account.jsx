import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import { Title } from '../components/title'

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
                        sx={{
                            m: 3,
                        }}
                        />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
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