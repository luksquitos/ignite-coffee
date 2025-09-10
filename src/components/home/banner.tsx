import type { Icon } from '@phosphor-icons/react'
import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from '@phosphor-icons/react'

interface OptionProps {
  icon: Icon
  backgroundColor: string
  text: string
}

function Option({ icon: IconComponent, backgroundColor, text }: OptionProps) {
  return (
    <div className="flex items-center gap-3">
      {/* FIXME O icone dentro do círculo está estranho */}
      <IconComponent
        className={`${backgroundColor} size-8 rounded-full text-white p-2`}
        weight="fill"
      />
      <p className="text-base-text">{text}</p>
    </div>
  )
}

export function Banner() {
  return (
    <div className="my-24 bg-[url('/src/assets/background.png')] bg-no-repeat py-16 bg-center">
      <div className="flex justify-between centered-box">
        <div className="max-w-[588px]">
          <p className="font-baloo font-extrabold text-5xl text-base-title ">Encontre o café perfeito para qualquer hora do dia</p>
          <p className="text-xl mt-4 text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          {/* options */}
          <div className="mt-16 grid grid-cols-2 gap-5">
            <Option
              icon={ShoppingCartIcon}
              backgroundColor="bg-yellow-dark"
              text="Compra simples e segura"
            />
            <Option
              icon={PackageIcon}
              backgroundColor="bg-base-text"
              text="Embalagem mantém o café intacto"
            />
            <Option
              icon={TimerIcon}
              backgroundColor="bg-yellow"
              text="Entrega rápida e rastreada"
            />
            <Option
              icon={CoffeeIcon}
              backgroundColor="bg-purple"
              text="O café chega fresquinho até você"
            />
          </div>

        </div>

        <img src="./src/assets/banner.png" alt="Banner" />
      </div>
    </div>
  )
}
