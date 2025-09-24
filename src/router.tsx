import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/app/_layout'
import { Home } from './pages/home'
import { Payment } from './pages/payment'
import { Success } from './pages/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
