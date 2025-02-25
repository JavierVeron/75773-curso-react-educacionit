import { useParams } from "react-router-dom"
import arrayProductos from "./json/productos.json"

const Producto = () => {
    const {id} = useParams();
    const item = arrayProductos.find(product => product.id == id);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1 className="fw-bold">{item.nombre}</h1>
                    <p>${item.precio}</p>
                    <p>{item.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default Producto