
import { Box, Button, FormControl, InputAdornment, TextField, Typography } from '@mui/material'
import { Title } from '../components/title'
import EmailOutlined from '@mui/icons-material/EmailOutlined'

export function ForgotPassword() {


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
                <Typography variant='p' sx={{ fontWeight: 500, m:2 }}>RESET PASSWORD</Typography>
                    <TextField
                        required
                        id="standard-required"
                        label="Registered Email"
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
                
                <Button 
                    variant="contained"
                    sx={{
                        color:'#fff',
                        mt: 5,
                    }}
                    size='large'>
                        RESET PASSWORD
                </Button>
            </Box>
        </>
    )
}