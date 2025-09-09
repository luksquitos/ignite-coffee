import type { ICoffeeCard } from '../../@types/coffee-card-type'
import { ShoppingCartSimpleIcon } from '@phosphor-icons/react'

export function CoffeeCard({ id, name, description, categories, price, image }: ICoffeeCard) {
  return (
    <div className="h-80 relative">
      <div className="flex flex-col items-center absolute">
        <img src={image} alt="Ícone do café" />
        <div className="centered gap-1">
          {
            categories.map((category) => {
              return (
                <p className="mt-3 px-2 py-1 rounded-full bg-yellow-light font-bold text-[10px] text-yellow-dark">{category.toUpperCase()}</p>
              )
            })
          }
        </div>

        <p className="mt-4 font-baloo font-bold text-xl text-base-subtitle">{name}</p>
        <p className="mt-2 mx-5 text-base-label text-center text-[0.875rem]">{description}</p>
        {/* Buy section */}
        {/* FIXME Justify incorreto */}
        <section className="mt-8 w-52 h-9 flex justify-between items-center gap-6 border">
          <span className="centered gap-1">
            <p className="text-[0.875rem] text-base-text">R$</p>
            <p className="font-baloo font-extrabold text-2xl text-base-text">{price.toFixed(2).replace('.', ',')}</p>
          </span>
          <div className="centered gap-2">
            {/* será que é melhor fazer de outra forma ? */}
            <span className="w-18 border">
              OI
            </span>

            <button>
              <ShoppingCartSimpleIcon weight="fill" className="p-2 size-9 bg-purple-dark text-base-card rounded-[6px]" />
            </button>
          </div>

        </section>
      </div>
      <div className="bg-base-card mt-5 h-[19.375rem] rounded-tl-[6px] rounded-br-[6px] rounded-tr-[2.25rem] rounded-bl-[2.25rem]"></div>
    </div>
  )
}
