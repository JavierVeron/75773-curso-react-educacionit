import { Routes, Route } from "react-router-dom"
import NavBar from "./clase4/NavBar";
import Productos from "./clase4/Productos";
import Producto from "./clase4/Producto";
import EnFamilia from "./clase4/EnFamilia";
import RecetasDelFuturo from "./clase4/RecetasDelFuturo";
import Error404 from "./clase4/Error404";
import Footer from "./clase4/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Productos />} />
        <Route path={"/productos"} element={<Productos />} />
        <Route path={"/producto/:id"} element={<Producto />} />
        <Route path={"/categoria/:id"} element={<Productos />} />
        <Route path={"/familia"} element={<EnFamilia />} />
        <Route path={"/recetas"} element={<RecetasDelFuturo />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
