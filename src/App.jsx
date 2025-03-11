import NavBar from "./clase4/NavBar";
import Footer from "./clase4/Footer";
import ThemeContextProvider from "./clase5/context/ThemeContext";
import CartContextProvider from "./clase5/context/CartContext";
import Tareas from "./clase7/Tareas";

function App() {
  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          <NavBar />
          <Tareas />
          <Footer />
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
