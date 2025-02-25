import { Link } from "react-router-dom"
import arrayProductos from "./json/productos.json"

const ProductosCategoria = () => {
    return (
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 text-center">
                    <Link to={"/categoria/hamburguesas"} className="text-black text-decoration-none">
                        <p><img src={arrayProductos[0].imagen} alt={arrayProductos[0].nombre} className="img-fluid" /><br />Hamburguesas</p>
                    </Link>
                </div>
                <div className="col-md-2 text-center">
                    <Link to={"/categoria/pollo"} className="text-black text-decoration-none">
                        <p><img src={arrayProductos[3].imagen} alt={"Sándwiches de Pollo"} className="img-fluid" /><br />Sándwiches de Pollo</p>
                    </Link>
                </div>
                <div className="col-md-2 text-center">
                    <Link to={"/categoria/papas"} className="text-black text-decoration-none">
                        <p><img src={arrayProductos[4].imagen} alt={"Papas y Complementos"} className="img-fluid" /><br />Papas y Complementos</p>
                    </Link>
                </div>
                <div className="col-md-2 text-center">
                    <Link to={"/categoria/bebidas"} className="text-black text-decoration-none">
                        <p><img src={arrayProductos[6].imagen} alt={"Bebidas"} className="img-fluid" /><br />Bebidas</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductosCategoria