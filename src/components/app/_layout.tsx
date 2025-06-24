import { Outlet } from "react-router-dom";
import { Header } from "../shared/header";


export function DefaultLayout(){
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}