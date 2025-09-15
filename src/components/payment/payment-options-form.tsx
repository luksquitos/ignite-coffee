import type { Icon } from '@phosphor-icons/react'
import { BankIcon, CreditCardIcon, CurrencyDollarIcon, MoneyIcon } from '@phosphor-icons/react'

function PaymentOption({ icon: IconComponent, name }: { icon: Icon, name: string }) {
  return (
    <button type="button" className="flex flex-1 gap-3 rounded-md p-4 bg-base-button hover:bg-base-hover hover:cursor-pointer">
      <IconComponent className="size-4 text-purple" weight="regular" />
      <p className="text-base-text text-xs">{name.toUpperCase()}</p>
    </button>
  )
}

export function PaymentOptionsForm() {
  return (
    <form action="" className="mt-3 w-[40rem] h-52 p-10 rounded-md bg-base-card">
      <main>
        <div className="flex items-start gap-2">
          <CurrencyDollarIcon className="size-5.5 text-purple" />
          <div className="">
            <p className="text-base-subtitle">Pagamento</p>
            <p className="text-base-text text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </div>
        {/* Options */}
        <div className=" mt-8 centered gap-3">
          <PaymentOption
            icon={CreditCardIcon}
            name="Cartão de Crédito"
          />
          <PaymentOption
            icon={BankIcon}
            name="Cartão de Débito"
          />
          <PaymentOption
            icon={MoneyIcon}
            name="Dinheiro"
          />
        </div>

      </main>

    </form>
  )
}
