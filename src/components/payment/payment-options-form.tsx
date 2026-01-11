import type { UseFormReturn } from 'react-hook-form'
import type { Payment } from '@/schemas/payment-schema'
import { BankIcon, CreditCardIcon, CurrencyDollarIcon, MoneyIcon } from '@phosphor-icons/react'
import { Controller } from 'react-hook-form'
import { PaymentOption } from './payment-option'

interface PaymentOptionsProps {
  form: UseFormReturn<Payment>
}

export function PaymentOptionsForm({ form }: PaymentOptionsProps) {
  const errorMessage = form.formState.errors?.cartao?.message
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
        <Controller
          name="cartao"
          control={form.control}
          render={({ field }) => (
            <div className=" mt-8 centered gap-3 flex-wrap">
              <PaymentOption
                icon={CreditCardIcon}
                name="Cartão de Crédito"
                onSelect={() => field.onChange('credit')}
                isActive={field.value === 'credit'}
              />
              <PaymentOption
                icon={BankIcon}
                name="Cartão de Débito"
                onSelect={() => field.onChange('debit')}
                isActive={field.value === 'debit'}
              />
              <PaymentOption
                icon={MoneyIcon}
                name="Dinheiro"
                onSelect={() => field.onChange('money')}
                isActive={field.value === 'money'}
              />
            </div>
          )}
        />
        {errorMessage && (
          <p>
            {errorMessage}
          </p>
        )}

      </main>
    </section>
  )
}
