import { BankIcon, CreditCardIcon, CurrencyDollarIcon, MoneyIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { PaymentOption } from './payment-option'

export function PaymentOptionsForm() {
  const [paymentSelected, setPaymentSelected] = useState('')

  return (
    <section className="mt-3 h-52 p-10 rounded-md bg-base-card">
      <main>
        <div className="flex items-start gap-2">
          <CurrencyDollarIcon className="size-5.5 text-purple" />
          <div className="">
            <p className="text-base-subtitle">Pagamento</p>
            <p className="text-base-text text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </div>
        {/* Options */}
        <div className=" mt-8 centered gap-3 flex-wrap">
          <PaymentOption
            icon={CreditCardIcon}
            name="Cartão de Crédito"
            onSelect={() => setPaymentSelected('Cartão de Crédito')}
            isActive={paymentSelected === 'Cartão de Crédito'}
          />
          <PaymentOption
            icon={BankIcon}
            name="Cartão de Débito"
            onSelect={() => setPaymentSelected('Cartão de Débito')}
            isActive={paymentSelected === 'Cartão de Débito'}
          />
          <PaymentOption
            icon={MoneyIcon}
            name="Dinheiro"
            onSelect={() => setPaymentSelected('Dinheiro')}
            isActive={paymentSelected === 'Dinheiro'}
          />
        </div>

      </main>
    </section>
  )
}
