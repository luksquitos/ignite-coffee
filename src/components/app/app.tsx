import { BrowserRouter } from 'react-router-dom'
import { UserPaymentProvider } from '@/providers/user-payment-provider'
import { CartContextProvider } from '../../providers/cart-provider'
import { Router } from '../../router'

export function App() {
  return (
  // por que usar o h-screen aqui ?
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <UserPaymentProvider>
            <Router />
          </UserPaymentProvider>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  )
}
