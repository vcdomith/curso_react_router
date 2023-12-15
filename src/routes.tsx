import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./paginas/Inicio/Inicio"
import SobreMim from "./paginas/SobreMim/SobreMim"
import Menu from "./components/Menu/Menu"
import Rodape from "./components/Rodape/Rodape"
import PaginaPadrao from "./components/PaginaPadrao/PaginaPadrao"
import Post from "./paginas/Post/Post"
import NaoEncontrada from "./paginas/NaoEncontrada/NaoEncontrada"


function AppRoutes() {

  return (
    <>
      <BrowserRouter >
      <Menu />
        <Routes >
          <Route
            path="/"
            element={<PaginaPadrao />}
          >
            <Route 
              index //Nesse caso poderia ser usado o prop index, que repete o path do Route pai
              element={<Inicio />}
            />
            <Route 
              path="sobremim" 
              element={<SobreMim />}
            />
          </Route>
            <Route 
              path="posts/:id/*" // : é um seletor coringa que passa esse parametro para o component
              element={<Post />}
            />
          <Route 
            path="*" // Seletor coringa, caso a rota não seja encontrada esse será o padrão ou 404
            element={<NaoEncontrada />}
          />
        </Routes >
      <Rodape />
      </BrowserRouter >      
    </>
  )


}

export default AppRoutes
