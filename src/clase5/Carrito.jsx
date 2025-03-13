import { useDispatch, useSelector } from "react-redux"
import { VACIAR_CARRITO, ELIMINAR_PRODUCTO } from "../clase8/actions";
import { Link } from "react-router-dom";

const Carrito = () => {
    const carrito = useSelector(state => state.carrito);
    const cantProductos = useSelector(state => state.cantProductos);
    const sumaTotal = useSelector(state => state.sumaProductos);
    const dispatch = useDispatch();

    const vaciarCarrito = () => {
        dispatch(VACIAR_CARRITO);
    }

    const eliminarProducto = (id) => {        
        dispatch(ELIMINAR_PRODUCTO(id));
    }

    if (cantProductos == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>No se encontraron Productos en el Carrito!</h1>
                        <Link to={"/"} className="btn btn-warning fw-bold my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-end" colSpan={6}><button className="btn btn-warning btn-sm" title="Vaciar Carrito" onClick={vaciarCarrito}>Vaciar Carrito</button></td>
                            </tr>
                            {
                                carrito.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">${item.precio}</td>
                                        <td className="align-middle">x{item.cantidad}</td>
                                        <td className="align-middle">${item.precio * item.cantidad}</td>
                                        <td className="align-middle text-end"><button className="btn btn-warning" title="Eliminar" onClick={() => {eliminarProducto(item.id)}}><i className="bi bi-trash"></i></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={4}>Suma Total</td>
                                <td><b>${sumaTotal}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Carrito