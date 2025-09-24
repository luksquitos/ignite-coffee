import { useReducer } from 'react'
import { useCart } from '@/providers/cart-provider'
import { CartItem } from './cart-item'
import { EmptyCart } from './empty-cart'

export function CartList() {
  const { cart, cartHasItems } = useCart()
  const { cartItemsSum } = useReducer((item) => {})

  return (

    <div className="centered-box mt-10!">
      <p className="text-base-subtitle text-lg font-bold">Cafés selecionados</p>

      <section className="bg-base-card mt-4 p-10 rounded-tr-4xl rounded-bl-4xl rounded-tl-md rounded-br-md">
        {
          cart.map((item) => {
            return (
              <>
                <CartItem cartItem={item} />
                <span className="block my-6 border-t-1" />
              </>
            )
          })
        }
        {!cartHasItems && (<EmptyCart />)}
        {/* Soma */}
        {cartHasItems && (
          <div>
            <div className="flex justify-between">
              <p className="text-base-text">Total de Itens</p>
              <p className="text-base-text">R$ 20,00</p>
            </div>
            <div className="mt-3 flex justify-between">
              <p className="text-base-text">Entrega</p>
              <p className="text-base-text">R$ 4,50</p>
            </div>
            <div className="mt-3 flex justify-between">
              <p className="font-bold text-xl text-base-subtitle">Total</p>
              <p className="font-bold text-xl text-base-subtitle">R$ 24,50</p>
            </div>
          </div>

        )}

        {cartHasItems && (
          <button className="mt-6 w-full py-2.5 bg-yellow text-white font-bold text-sm rounded-md hover:bg-yellow-dark hover:cursor-pointer transition">
            CONFIRMAR PEDIDO
          </button>
        )}

      </section>

    </div>
  )
}
