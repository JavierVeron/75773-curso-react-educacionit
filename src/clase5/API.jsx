import { useContext } from "react";
import useAPI from "./useAPI"
import { CartContext } from "./context/CartContext";

const API = () => {
    const resultado = useAPI("https://fakestoreapi.com/products");
    const {agregarProducto} = useContext(CartContext);
    
    return (
        <div className="container">
            <div className="row">
                <h1>Hook Personalizado</h1>
                {
                    resultado.map(item => (
                        <div key={item.id} className="col-md-3">
                            <div className="card mb-3 border-0">
                                <img src={item.image} alt={item.title} className="img-fluid" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">${item.price}</p>
                                    <button className="btn btn-primary" onClick={() => {agregarProducto(item.id)}}>Agregar (+)</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default API