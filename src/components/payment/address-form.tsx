import type { FieldValues, UseFormRegister, UseFormReturn } from 'react-hook-form'
import type { Payment } from '@/schemas/payment-schema'
import { MapPinLineIcon } from '@phosphor-icons/react'
import { Input } from '../ui/input'

interface AddressFormProps {
  form: UseFormReturn<Payment>
}

export function AddressForm({ form }: AddressFormProps) {
  return (
    <div className="centered-box mt-10!">
      <p className="text-base-subtitle text-lg font-bold">Complete seu pedido</p>

      <section className="mt-4 rounded-md p-10 bg-base-card">
        <main className="">
          <div className="flex items-start gap-2">
            <MapPinLineIcon className="size-5.5 text-yellow-dark" />
            <div>
              <p className="text-base-subtitle">Endereço de entrega</p>
              <p className="text-base-text text-sm">Informe o endereço onde deseja receber seu pedido </p>
            </div>
          </div>
          {/* Inputs */}
          <div className="mt-8 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-[2fr_3fr_1fr]">
              <Input placeholder="CEP" className="h-10" {...form.register('cep')} />
            </div>
            <Input placeholder="Rua" className="h-10" {...form.register('rua')} />
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-3">
              <Input placeholder="Número" className="h-10" {...form.register('numero')} />
              <Input placeholder="Complemento" className="h-10" {...form.register('complemento')} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr_1fr] gap-3">
              <Input placeholder="Bairro" className="h-10" {...form.register('bairro')} />
              <Input placeholder="Cidade" className="h-10" {...form.register('cidade')} />
              <Input placeholder="UF" className="h-10" {...form.register('uf')} />
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}
