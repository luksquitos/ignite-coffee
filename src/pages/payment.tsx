import type { Payment } from '@/schemas/payment-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { CartList } from '@/components/payment/cart-list'
import { useCart } from '@/providers/cart-provider'
import { useUserPayment } from '@/providers/user-payment-provider'
import { paymentSchema } from '@/schemas/payment-schema'
import { AddressForm } from '../components/payment/address-form'
import { PaymentOptionsForm } from '../components/payment/payment-options-form'

export function PaymentPage() {
  const { userPayment, setUserPayment } = useUserPayment()
  const { clearCart } = useCart()
  const form = useForm<Payment>({
    resolver: zodResolver(paymentSchema),
    defaultValues: userPayment,
  })
  const navigate = useNavigate()
  function handleFormSubmit(data: Payment) {
    setUserPayment(data)
    clearCart()
    toast.success('Pedido realizado com sucesso')
    navigate('/success')
  }

  return (
    <form onSubmit={form.handleSubmit(handleFormSubmit)} className="centered-box grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8">
      <div>
        <AddressForm form={form} />
        <PaymentOptionsForm form={form} />
      </div>
      <CartList />
    </form>
  )
}
