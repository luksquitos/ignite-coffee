import { MapPinLineIcon } from '@phosphor-icons/react'

export function AddressForm() {
  return (
    <div className="centered-box mt-10!">
      <p className="text-base-subtitle text-lg font-bold">Complete seu pedido</p>
      <form action="" className="mt-4 p-10 w-[40rem] h-[23.25rem] bg-base-card">
        <main className="">
          <div className="flex items-start gap-2">
            <MapPinLineIcon className="size-5.5 text-yellow-dark" />
            <div className="">
              <p className="text-base-subtitle">Endereço de entrega</p>
              <p className="text-base-text text-sm">Informe o endereço onde deseja receber seu pedido </p>
            </div>
          </div>
        </main>
      </form>
    </div>
  )
}
