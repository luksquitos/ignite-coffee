import type { ICoffeeCard } from '../../@types/coffee-card-type'
import { ShoppingCartIcon } from '@phosphor-icons/react'

export function CoffeeCard({ id, name, description, categories, price, image }: ICoffeeCard) {
  return (
    <div className="w-3xs h-80 relative">
      <div className="flex flex-col items-center absolute">
        <img src={image} alt="Ícone do café" />
        <p>{categories}</p>
        <p>{name}</p>
        <p>{description}</p>
        <div className="centered">
          <p>{price}</p>
          <div>
            {/* será que é melhor fazer de outra forma ? */}
            <input type="number" name="" id="" />
            <button>
              <ShoppingCartIcon weight="fill" />
            </button>
          </div>

        </div>
      </div>
      <div className="bg-base-card mt-5 h-[19.375rem] rounded-tl-[6px] rounded-br-[6px] rounded-tr-[2.25rem] rounded-bl-[2.25rem]"></div>
    </div>
  )
}
