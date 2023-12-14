import { Outlet } from "react-router-dom"
import Banner from "../Banner/Banner"


const PaginaPadrao = () => {
  return (
    <main>
        <Banner />

        <Outlet />
    </main>
  )
}

export default PaginaPadrao