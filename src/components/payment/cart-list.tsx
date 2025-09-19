import { useCart } from '@/providers/cart-provider'
import { CartItem } from './cart-item'

export function CartList() {
  const { cart } = useCart()
  return (

    <div className="centered-box mt-10!">
      <p className="text-base-subtitle text-lg font-bold">Cafés selecionados</p>

      <section className="bg-base-card mt-4 p-10 rounded-tr-4xl rounded-bl-4xl rounded-tl-md rounded-br-md">
        {
          cart.map((item) => {
            return (
              <>
                <CartItem
                  coffee={item.coffee}
                  quantity={item.quantity}
                />
                <span className="block my-6 border-t-1" />
              </>
            )
          })
        }

      </section>

    </div>
  )
}
