import { Box, Container, Grid, Typography } from "@mui/material"
import { Navbar } from "../components/navbar"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { BalanceCard } from "../components/balancecard"
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import PaymentsIcon from '@mui/icons-material/Payments'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import UpgradeIcon from '@mui/icons-material/Upgrade'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import RateReviewIcon from '@mui/icons-material/RateReview'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    borderRadius: "10px",
    height:"10vh",
    width:"32vw",
    color: theme.palette.text.secondary,
  }));

  const iconStyle = {
    fontSize: '1.7rem',
  };

  const iconText = {
    fontSize: '0.8rem',
  };


export function Home() {
    return (
        <>

            <Navbar />
            <Box
                display="flex"
                flex={1}
                flexDirection="column"
                padding={3}
                height={250}
                sx={{
                    borderRadius: "0 0 50px 50px",
                    bgcolor: 'secondary.main',
                  }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}
                >
                    <AccountCircleOutlinedIcon sx={{color:"#fff", fontSize: "60px"}}/>
                    <NotificationsActiveOutlinedIcon sx={{color:"#fff", fontSize: "30px"}}/>
                </Box>

                {/* Text */}
                <Typography 
                    variant="h2"
                    p={3}
                    pb={0}
                    sx={{
                        color:"#fff",
                        fontSize:"28px",
                        fontWeight:"700"
                    }}
                >
                    Hello, Dayo
                </Typography>
                <Typography 
                    variant="p" 
                    p={3} 
                    pt={0}
                    sx={{
                        color:"#fff",
                        fontSize:"18px"
                    }}
                >
                    Welcome to your Dashboard
                </Typography>

                {/* Card */}

                <BalanceCard />

                {/* Options Section */}

                <Typography variant="p" m={1.5}>
                    What do you want to do today?
                </Typography>

                <Box
                    alignItems="center"
                    textAlign="center"
                    sx={{ 
                        m: 2, 
                        mt: 2,
                        }}
                    >
                    <Grid container spacing={3} mb={10}>
                        <Grid xs={6} md={6}>
                            <Item>
                                <PaymentsIcon sx={iconStyle}/>
                                <Typography variant="button" display="block" sx={iconText}>REQUEST <br/>WITHDRAWAL</Typography>
                            </Item>
                        </Grid>
                        <Grid xs={6} md={6}>
                            <Item>
                                <LocalAtmIcon sx={iconStyle}/>
                                <Typography variant="button" display="block" sx={iconText}>REQUEST <br/>LOAN</Typography>
                            </Item>
                        </Grid>
                        <Grid xs={6} md={6}>
                            <Item>
                                <UpgradeIcon sx={iconStyle}/>
                                <Typography variant="button" display="block" sx={iconText}>UPGRADE <br/>ACCOUNT</Typography>
                            </Item>
                        </Grid>
                        <Grid xs={6} md={6}>
                            <Item>
                                <AccountBalanceWalletIcon sx={iconStyle}/>
                                <Typography variant="button" display="block" sx={iconText}>VIEW ACCOUNT <br/>AND LIABILITIES</Typography>
                            </Item>
                        </Grid>
                        <Grid xs={6} md={6}>
                            <Item>
                                <RateReviewIcon sx={iconStyle}/>
                                <Typography variant="button" display="block" sx={iconText}>COMPlAINTS <br/> OR SUGGESTIONS</Typography>
                            </Item>
                        </Grid>
                        <Grid xs={6} md={6}>
                            <Item>
                                <ExitToAppIcon sx={iconStyle}/>
                                <Typography variant="button" display="block" sx={iconText}>EXIT <br/>COOPERATIVE</Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
