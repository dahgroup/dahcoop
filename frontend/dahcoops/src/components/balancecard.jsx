import { Fragment } from 'preact'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Container } from '@mui/material'



const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const card = (
  <Fragment>
     <CardContent>
        <Box
            display="flex"
            flex={1}
            flexDirection="row"
            justifyContent="space-between"
            p={1}
            pb={0}
            mb={2}
        >
            <Box>
                <Typography sx={{ fontSize: "0.8rem" }} color="text.secondary" gutterBottom>
                    Cooperative Savings
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontSize: "1.3rem", fontWeight:700 }} >
                    {bull}NGN 500,000
                </Typography>
            </Box>

            <Box>
                <Typography sx={{ fontSize: "0.8rem", textAlign: "right" }} color="text.secondary" gutterBottom>
                    Loan Balance
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontSize: "1.3rem", fontWeight:700 }}>
                    {bull}NGN 5,600
                </Typography>
            </Box>
        </Box>
        <hr/>
    </CardContent>

    <CardActions>
        <Box
            display="flex"
            flex={1}
            flexDirection="row"
            alignItems="center"
            textAlign="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
        >
            <Box
                display="flex"
                flex={1}
                flexDirection="row"
                textAlign="center"
            >
                <Typography sx={{ mb: 1.5, mr: 1, fontSize: "0.8rem" }} color="text.secondary">
                    Hide Balance 
                </Typography>
                <VisibilityIcon sx={{fontSize: "1rem"}}/>
            </Box>
        
            <Button size="small" sx={{ fontSize: "0.6rem" }}>View More Details</Button>
        </Box>
    </CardActions>
  </Fragment>
);

export function BalanceCard() {
  return (
    <Box 
        sx={{ 
            minWidth: 275
        }}
    >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}