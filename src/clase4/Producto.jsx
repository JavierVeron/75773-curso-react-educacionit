import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AGREGAR_PRODUCTO } from "../clase8/actions";

const Producto = () => {
    const {id} = useParams();
    //const item = arrayProductos.find(product => product.id == id);
    const productos = useSelector(state => state.productos);
    const item = productos.find(product => product.id == id);
    const dispatch = useDispatch();

    const agregarAlCarrito = (id) => {
        dispatch(AGREGAR_PRODUCTO(id));
    }

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
                    <p><button className="btn btn-warning fw-bold" onClick={() => {agregarAlCarrito(item.id)}}>Agregar al Carrito</button></p>
                </div>
            </div>
        </div>
    )
}

export default Producto