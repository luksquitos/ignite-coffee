import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from '../../providers/cart-provider'
import { Router } from '../../router'

export function App() {
  return (
  // por que usar o h-screen aqui ?

    <body>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </body>
  )
}
