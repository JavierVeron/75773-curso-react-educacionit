import NavBar from "./clase4/NavBar";
import Footer from "./clase4/Footer";
/* import withPosts from "./clase5/HOC"; */
import Layout from "./clase5/Layout";
import ThemeContextProvider from "./clase5/context/ThemeContext";
import API from "./clase5/API";
import CartContextProvider from "./clase5/context/CartContext";
import { Route, Routes } from "react-router-dom";
import Carrito from "./clase5/Carrito";

function App() {
  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          <NavBar />
          {/* <Layout>
            <h1>Educación IT</h1>
            <h3>Curso de React JS Developer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nobis, tenetur exercitationem cumque commodi sequi a? Error tenetur eius unde veniam, corrupti necessitatibus, veritatis nemo, corporis deleniti laborum earum culpa!</p>
          </Layout> */}
          {/* <withPosts>
            <p>hola</p>
          </withPosts> */}
          <Routes>
            <Route path="/" element={<API />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          <Footer />
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
