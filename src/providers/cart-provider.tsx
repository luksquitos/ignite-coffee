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
    const existingItem = cart.find(item => item.coffee.id === cartItem.coffee.id)

    if (existingItem) {
    // Se o item já existe, crie um novo array com a quantidade atualizada.
      const updatedCart = cart.map(item =>
        item.coffee.id === existingItem.coffee.id
          ? { ...item, quantity: item.quantity + cartItem.quantity }
          : item,
      )
      setCart(updatedCart)
    }
    else {
    // Se o item não existe, adicione-o ao final do array.
      setCart(prevCart => [...prevCart, cartItem])
    }
  }

  function updateCoffeeQuantity(cartItem: ICartItem, newQuantity: number) {
    const updatedCart = cart.map(item =>
      item.coffee.id === cartItem.coffee.id
        ? { ...item, quantity: newQuantity }
        : item,
    )
    setCart(updatedCart)
  }

  function removeCoffeeFromCart(cartItem: ICartItem) {
    setCart(cart.filter((item) => {
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
