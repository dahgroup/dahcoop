import { useState } from 'preact/hooks'
import { Box, Button, FormControl, InputAdornment, TextField, Typography } from '@mui/material'
import { Title } from '../components/title'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
import LockOutlined from '@mui/icons-material/LockOutlined'

export function Account() {

    const [action, setAction] = useState("LOGIN")

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
                <Typography variant='p' sx={{ fontWeight: 500, m:2 }}>{action}</Typography>
                {/* Buttons */}
                <Box flexDirection="row">
                    <Button 
                        variant={action==="LOGIN" ? "contained" : "outlined"}
                        onClick={()=>{setAction("LOGIN")}}
                        sx={{
                            m: 1,
                            mt: 4,
                        }}
                        size='large'>
                            LOGIN
                    </Button>

                    <Button 
                        variant={action==="REGISTER" ? "contained" : "outlined"}
                        onClick={()=>{setAction("REGISTER")}}
                        sx={{
                            m: 1,
                            mt: 4,
                        }}
                        size='large'>
                            REGISTER
                    </Button>

                </Box>
                
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
                    {action === "REGISTER"?<div></div>:
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
                        />}
                    
                    <Button 
                        variant="contained"
                        sx={{
                            color:'#fff',
                            mt: 5,
                        }}
                        size='large'>
                            {action}
                    </Button>
                </FormControl>
            </Box>
        </>
    )
}