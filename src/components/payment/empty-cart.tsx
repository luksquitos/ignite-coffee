import { CoffeeIcon } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center w-full px-1 py-2 ">
      <CoffeeIcon
        weight="fill"
        size={84}
        className="text-base-subtitle"
      />

      <p className="mt-8 text-base-subtitle text-lg font-bold">Nenhum café selecionado</p>
      <p className="text-base-text text-sm">Oops! Parece que seu carrinho está vazio. </p>

      <NavLink to="/" className="w-full mt-6  py-2.5 bg-yellow text-center text-white font-bold text-sm rounded-md hover:bg-yellow-dark hover:cursor-pointer transition ">
        VOLTAR A HOME
      </NavLink>

    </div>
  )
}
