import { Outlet } from "react-router-dom";
import { Header } from "../shared/header";


export function DefaultLayout(){
  return (
    <div className="m-auto max-w-[1140px]">
      <Header/>
      <Outlet/>
    </div>
  )
}