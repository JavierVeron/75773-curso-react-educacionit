import { createContext, useState } from "react";
import useAPI from "../useAPI";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);    

    const buscarProducto = (id) => {
        const producto = productos.find(item => item.id == id);
        console.log(producto);
                

        return producto;
    }

    const agregarProducto = (id) => {
        //const producto = buscarProducto(id);
        setCarrito([...carrito, id])
    }

    return <CartContext.Provider value={{carrito, agregarProducto}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider