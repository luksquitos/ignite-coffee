import { AddressForm } from '../components/payment/address-form'
import { PaymentOptionsForm } from '../components/payment/payment-options-form'

export function Payment() {
  return (
    <div className="centered-box grid grid-cols-1 lg:grid-cols-2">
      <div>
        <AddressForm />
        <PaymentOptionsForm />
      </div>
    </div>
  )
}
