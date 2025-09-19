import type { ICartItem } from '@/@types/cart-item-type'
import { TrashIcon } from '@phosphor-icons/react'
import { Counter } from '../ui/counter'

export function CartItem({ coffee, quantity }: ICartItem) {
  return (
    <div className="centered w-full! gap-5 justify-between! ">
      <img src={coffee.image} alt="Ícone do Café" className="size-16" />
      <div>
        <p className="text-base-subtitle">{coffee.name}</p>
        <div className="centered gap-2">
          <Counter
            value={quantity}
          />

          <button className="centered bg-base-button gap-1 rounded-md p-2">
            <TrashIcon className="text-purple" />
            <p className="text-base-text">REMOVER</p>
          </button>

        </div>
      </div>
      <p>
        R$
        {coffee.price * quantity}
      </p>
    </div>
  )
}
