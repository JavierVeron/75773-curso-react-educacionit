import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const Carrito = () => {
    const {carrito} = useContext(CartContext);
    console.log(carrito);
    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {
                                carrito.map(item => (
                                    <tr>
                                        <td><img src={item.image} alt={item.title} width={80} /></td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Carrito