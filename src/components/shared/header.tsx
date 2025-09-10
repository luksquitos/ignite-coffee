import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import igniteLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="py-8 flex items-center justify-between centered-box">
      <NavLink to="/">
        <img src={igniteLogo} alt="#" />
      </NavLink>
      <div className="flex gap-3">
        <button className="bg-purple-light flex items-center gap-1 rounded px-[10px] py-2 text-purple-dark font-bold">
          <MapPinIcon weight="fill" className="text-purple" size={22} />
          Porto Alegre, RS
        </button>

        <NavLink to="/payment" className="bg-yellow-light relative rounded p-2.5">
          {/* Butão flutuante de itens */}
          {/* <div className="bg-yellow-dark rounded-full size-5 absolute -top-1.5 -right-2.5 centered text-white font-bold text-xs">3</div> */}
          <ShoppingCartIcon weight="fill" className="text-yellow-dark text-2xl hover:cursor-pointer" />
        </NavLink>
      </div>
    </header>
  )
}
