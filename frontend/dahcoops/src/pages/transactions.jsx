import { Box, Typography } from "@mui/material";
import { Navbar } from "../components/navbar";
import { Transaction } from "../components/transaction";


const iconText = {
    fontSize: '0.8rem',
  };


export function Transactions() {
    return (
        <>
            <Typography
                variant="h1"
                p={3}
                pb={0}
                sx={{
                    fontSize:"28px",
                    fontWeight:"700"
                }}
            >
                Transactions
            </Typography>
             <Box
                display="flex"
                flex={1}
                flexDirection="column"
                alignItems="center"
                minHeight="100vh"
                p={5}
            >
                <input
                    placeholder="Search Transactions"
                    style={{
                        height: 20,
                        width: "60vw",
                        marginTop: 5,
                        borderRadius: 10,
                        padding: 10,
                        borderColor: "#808080",
                    }}
                />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Navbar />
            </Box>
        </>
    )
}
