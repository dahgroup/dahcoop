import { Typography } from '@mui/material'

export function Title() {
    return (
        <>
            <Typography variant='h3' 
                sx={{
                    display: {sm:'block'}
                }}
            >
                DAHCOOPS
            </Typography>
            <Typography variant='p'>
                Welcome Back!
            </Typography>
        </>
    )
}