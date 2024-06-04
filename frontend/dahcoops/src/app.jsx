import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Transactions } from './pages/transactions';
import { Finance } from './pages/finance';
import { Profile } from './pages/profile';
import { Account } from './pages/account/account';

export function App() {
	return (
		<Routes>
			<Route path='/' element={<Account />} />
			<Route path='/home' element={<Home />} />
			<Route path='/transactions' element={<Transactions />} />
			<Route path='/finance' element={<Finance />} />
			<Route path='/profile' element={<Profile />} />
		</Routes>
	);
}
