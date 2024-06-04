import { useState } from 'preact/hooks';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export function Navbar() {
	const [value, setValue] = useState(0);

	return (
		<Paper
			sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
			elevation={3}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}>
				<BottomNavigationAction label='Home' icon={<HomeOutlinedIcon />} />
				<BottomNavigationAction
					label='Transactions'
					icon={<ReceiptLongOutlinedIcon />}
				/>
				<BottomNavigationAction
					label='Finance'
					icon={<AccountBalanceWalletOutlinedIcon />}
				/>
				<BottomNavigationAction
					label='Profile'
					icon={<AccountCircleOutlinedIcon />}
				/>
			</BottomNavigation>
		</Paper>
	);
}
