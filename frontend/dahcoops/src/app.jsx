import { useState } from 'preact/hooks'
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import { Account } from './pages/account'
import { Home } from './pages/home'
import { Transactions } from './pages/transactions'
import { Finance } from './pages/finance'
import { Profile } from './pages/profile'

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Account/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/finance" element={<Finance/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  )
}
