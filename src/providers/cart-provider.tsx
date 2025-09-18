import type { ReactNode } from 'react'
import type { ICartItem } from '../@types/cart-item-type'
import { createContext, useContext, useState } from 'react'

interface ICartContext {
  cart: ICartItem[]
  cartHasItems: boolean
  cartItemsCount: number
  addCoffeeToCart: (cartItem: ICartItem) => void
  removeCoffeeFromCart: (cartItem: ICartItem) => void
}

const CartContext = createContext<ICartContext | undefined>(undefined)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ICartItem[]>([])
  const cartHasItems = cart.length > 0
  const cartItemsCount = cart.length

  function addCoffeeToCart(cartItem: ICartItem) {
    // FIXME Verificar se item já está no carrinho.
    // Caso sim, apenas adicione a quantidade desejada
    setCart(() => [...cart, cartItem])
  }

  function removeCoffeeFromCart(cartItem: ICartItem) {
    // FIXME Verificar se item já está no carrinho.
    // Caso sim, apenas retireg a quantidade desejada
    setCart(() => cart.filter((item) => {
      return item.coffee.id !== cartItem.coffee.id
    }))
  }

  return (
    <CartContext.Provider value={{ cart, cartHasItems, cartItemsCount, addCoffeeToCart, removeCoffeeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('UseCart must be used inside.')
  }

  return context
}
