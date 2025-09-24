import type { AddressFormData } from '@/schemas/address-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CartList } from '@/components/payment/cart-list'
import { addressSchema } from '@/schemas/address-schema'
import { AddressForm } from '../components/payment/address-form'
import { PaymentOptionsForm } from '../components/payment/payment-options-form'

export function Payment() {
  const { register, handleSubmit } = useForm<AddressFormData>({ resolver: zodResolver(addressSchema) })

  function handleFormSubmit(data: AddressFormData) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="centered-box border grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8">
      <div>
        <AddressForm />
        <PaymentOptionsForm />
      </div>
      <CartList />
    </form>
  )
}
