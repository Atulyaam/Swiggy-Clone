import RestHeader from "./RestHeader"

import { Outlet } from "react-router"

export default function SecondryHome(){
  return(
    <>
    <RestHeader></RestHeader>
    <Outlet></Outlet>
    {/* outlet ki wajah se rest header her ek nested pages per show hoga */}
    </>
  )
}