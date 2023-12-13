import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./paginas/Inicio/Inicio"
import SobreMim from "./paginas/SobreMim/SobreMim"
import Menu from "./components/Menu/Menu"


function AppRoutes() {

  return (
    <>
      <BrowserRouter >
      <Menu />
        <Routes >
          <Route 
            path="/" 
            element={<Inicio />}
          />
          <Route 
            path="/sobremim" 
            element={<SobreMim />}
          />
          <Route 
            path="*" // Seletor coringa, caso a rota não seja encontrada esse será o padrão ou 404
            element={<div>Página não encontrada</div>}
          />
        </Routes >
      </BrowserRouter >      
    </>
  )


}

export default AppRoutes
