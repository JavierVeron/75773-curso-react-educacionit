import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import arrayProductos from "./json/productos.json"
import ProductosCategoria from "./ProductosCategoria"

const Productos = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const idProducto = searchParams.get("id");
    let arrayFiltro;

    if (idProducto) {
        arrayFiltro = idProducto ? arrayProductos.filter(item => item.id == idProducto) : [];
    } else {
        arrayFiltro = id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos;
    }
     
    /* arrayFiltro = idOrden ? arrayFiltro.sort((a, b) => {
        let datos = idOrden.split("-");

        if (datos[0] == "nombre") {
            if (datos[1] == "asc") {
                if (a.nombre > b.nombre) {
                    return 1
                } 
            } else {
                if (a.nombre < b.nombre) {
                    return 1
                } 
            }
        }

        if (datos[0] == "nombre") {
            if (datos[1] == "asc") {
                if (a.nombre > b.nombre) {
                    return 1
                } 
            } else {
                if (a.nombre < b.nombre) {
                    return 1
                } 
            }
        }        
    }) */

    const ordenSeleccionado = () => {
        const orden = document.getElementById("orden");
        navigate("/productos?" + orden.value, {replace:true})
    }

    return (
        <>
            <ProductosCategoria />
            <div className="container my-5">
                <div className="row my-3 d-flex justify-content-end">
                    <div className="col-md-1">
                        <select id="orden" className="form-control" onChange={ordenSeleccionado}>
                            <option value="">Ordenar</option>
                            <option value="order=nombre-asc">Ordenar por Nombre (Asc)</option>
                            <option value="order=nombre-desc">Ordenar por Nombre (Desc)</option>
                            <option value="order=precio-asc">Ordenar por Precio (Asc)</option>
                            <option value="order=precio-desc">Ordenar por Precio (Desc)</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {
                        arrayFiltro.map(item => (
                            <div key={item.id} className="col-md-3">
                                <div className="card text-center mb-5 border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                                    <Link to={"/producto/" + item.id} className="text-dark text-decoration-none">
                                        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.nombre}</h5>
                                            <p>${item.precio}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Productos