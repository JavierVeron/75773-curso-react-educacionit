import { useState } from "react";

const RenderizadoListas = () => {
    const productos = ["Hamburguesas", "Sándwiches de Pollo", "Papas y Complementos", "Bebidas"];
    const productos2 = [
        {id:1, nombre:"Hamburguesas", imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar"},
        {id:2, nombre:"Sándwiches de Pollo", imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$k5XhSNp5/200/200/original?country=ar"},
        {id:3, nombre:"Papas y Complementos", imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kKX4MZKT/200/200/original?country=ar"},
        {id:4, nombre:"Bebidas", imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kcX2292z/200/200/original?country=ar"},
        {id:5, nombre:"Postres", imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kcXjLPM7/200/200/original?country=ar"},
        {id:6, nombre:"Ensaladas", imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kGXmuT46/200/200/original?country=ar"},
        {id:7, nombre:"McCafé", imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kGXbPR72/200/200/original?country=ar"},
        {id:8, nombre:"Cajita Feliz", imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kaXT6bJZ/200/200/original?country=ar"}
    ]

    const [filtro, setFiltro] = useState("");
    const arrayFiltrado = filtro ? productos2.filter(item => item.nombre.toUpperCase().includes(filtro.toUpperCase())) : productos2;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Renderizado Listas</h1>
                    <ol className="list-group list-group-numbered">
                        {
                            productos.map(produ => (
                                <li key={produ} className="list-group-item">{produ}</li>
                            ))
                        }
                    </ol>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    <input type="text" className="form-control" value={filtro} onInput={(e) => {setFiltro(e.target.value)}} />
                </div>
            </div>
            <div className="row my-5">
                {
                    arrayFiltrado.length == 0 ? <h3 className='text-center'>No se encontraron Productos!</h3> : 
                    arrayFiltrado.map(item => (
                        <div className="col-md-3">
                            <div key={item.id} class="card text-center border-0">
                                <img src={item.imagen} class="img-fluid" alt={item.nombre} />
                                <div class="card-body">
                                    <h5 class="card-title">{item.nombre}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RenderizadoListas