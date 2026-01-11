import { MapPinIcon } from '@phosphor-icons/react'
import { useUserPayment } from '@/providers/user-payment-provider'

export function Success() {
  const { userPayment } = useUserPayment()
  return (
    <div className="centered-box">
      <p>Uhu! Pedido confirmado</p>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div className="lg:flex justify-between">
        <section className="bg-gradient-to-r from-yellow to-purple font-semibold rounded p-[1px]">
          <span className="flex w-full h-full p-10 bg-white rounded">
            <div className="flex gap-2">
              <MapPinIcon
                weight="fill"
                className="size-8 p-2 rounded-full bg-purple text-white"
              />
              <div>
                <p>{`Entrega em ${userPayment?.rua}, ${userPayment?.numero}`}</p>
                <p>{`${userPayment?.cidade}, ${userPayment?.uf}`}</p>
              </div>
            </div>

          </span>
        </section>

        <img src="./src/assets/bike.svg" alt="Ilustração" />

      </div>

    </div>
  )
}
