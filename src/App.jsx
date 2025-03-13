import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./clase5/context/ThemeContext";
import NavBar from "./clase4/NavBar";
import Footer from "./clase4/Footer";
import Productos from "./clase4/Productos";
import Producto from "./clase4/Producto";
import Carrito from "./clase5/Carrito";
import EnFamilia from "./clase4/EnFamilia";
import RecetasDelFuturo from "./clase4/RecetasDelFuturo";
import Error404 from "./clase4/Error404";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Productos />} />
          <Route path={"/productos"} element={<Productos />} />
          <Route path={"/familia"} element={<EnFamilia />} />
          <Route path={"/recetas"} element={<RecetasDelFuturo />} />
          <Route path={"/carrito"} element={<Carrito />} />
          <Route path={"/categoria/:id"} element={<Productos />} />
          <Route path={"/producto/:id"} element={<Producto />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  )
}

export default App
