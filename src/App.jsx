import NavBar from "./clase4/NavBar";
import Footer from "./clase4/Footer";
import ThemeContextProvider from "./clase5/context/ThemeContext";
import CartContextProvider from "./clase5/context/CartContext";
import APIAxios from "./clase6/APIAxios";

function App() {
  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          <NavBar />
          <APIAxios />
          <Footer />
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
