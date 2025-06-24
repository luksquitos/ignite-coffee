import { Outlet } from "react-router-dom";
import { Header } from "../shared/header";


export function DefaultLayout(){
  return (
    <div className="bg-red-300">
      <Header/>
      <Outlet/>
    </div>
  )
}