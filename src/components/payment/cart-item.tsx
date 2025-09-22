import type { ICartItem } from '@/@types/cart-item-type'
import { TrashIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { Counter } from '../ui/counter'

export function CartItem({ coffee, quantity }: ICartItem) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity)
  return (
    <div className="centered w-full! px-1 py-2 gap-12.5 items-start! ">
      <div className="centered gap-5">
        <img src={coffee.image} alt="Ícone do Café" className="size-16" />
        <div className="flex flex-col gap-2">
          <p className="text-base-subtitle">{coffee.name}</p>
          <div className="centered gap-2">
            <Counter
              value={quantity}
              textMinor
            />

            <button className="centered bg-base-button gap-1 rounded-md p-2 hover:bg-base-hover">
              <TrashIcon className="text-purple" />
              <p className="text-base-text text-xs">REMOVER</p>
            </button>

          </div>
        </div>
      </div>
      <p className="font-bold text-base-text">
        R$
        {(coffee.price * quantity).toFixed(2).replace('.', ',')}
      </p>
    </div>
  )
}
