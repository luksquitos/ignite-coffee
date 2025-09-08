import igniteLogo from "../../assets/logo.svg"
import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react"


export function Header(){
  //TODO Implementar balão flutuante que indica quantos itens o usuário tem no carrinho.
  return (
    <div className="py-8 flex items-center justify-between centered-box">
      <img src={igniteLogo} alt="#" />
      <div className="flex gap-3">
        <button className="bg-purple-light flex items-center gap-1 rounded px-[10px] py-2 text-purple-dark font-bold">
          <MapPinIcon weight="fill" className="text-purple" size={22}/>
          Porto Alegre, RS
        </button>
        <button className="bg-yellow-light rounded px-[10px] py-2">
          <ShoppingCartIcon weight="fill" className="text-yellow-dark"/>
        </button>
      </div>
    </div>
  )
}