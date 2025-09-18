import { CartList } from '@/components/payment/cart-list'
import { AddressForm } from '../components/payment/address-form'
import { PaymentOptionsForm } from '../components/payment/payment-options-form'

export function Payment() {
  return (
    <div className="centered-box border grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8">
      <div>
        <AddressForm />
        <PaymentOptionsForm />
      </div>
      <CartList />
    </div>
  )
}
