const CartelCalor = ({clima}) => {
    let titulo = "Hola Mundo!";

    return (
        <>
            <div className="alert alert-danger" role="alert">Hace <b>{clima}</b></div>
        </>
    )
}

const CartelFrio = ({clima}) => {
    return (
        <>
            <div className="alert alert-primary" role="alert">Hace <b>{clima}</b></div>
        </>
    )
}

const Renderizacion = () => {    
    let texto = "Algo";
    let haceCalor = false;
    const productos1 = ["Hamburguesas", "Sándwiches de Pollo", "Papas", "Bebidas"];
    const productos2 = [
        {
            id:1,
            nombre:"Hamburguesas",
            imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar",
            precio:8000
        },
        {
            id:2,
            nombre:"Sándwiches de Pollo",
            imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$k5XhSNp5/200/200/original?country=ar",
            precio:9000
        },
        {
            id:3,
            nombre:"Papas y Complementos",
            imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kKX4MZKT/200/200/original?country=ar",
            precio:5000
        },
        {
            id:4,
            nombre:"Bebidas",
            imagen:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kcX2292z/200/200/original?country=ar",
            precio:6000
        }
    ];

    return (
        <>
            <h1>Esto es un {texto.toLowerCase()}!</h1>
            <p className={`p-3 mb-2 text-white ${haceCalor ? "bg-danger" : "bg-primary"}`}>Hace <b>{haceCalor ? "CALOR" : "FRÍO"}</b></p>
            <div>{haceCalor ? <CartelCalor clima={"Mucho Calor!!"} /> : <CartelFrio clima="Mucho Frío!!" />}</div>
            <div>
                <ul>
                    {
                        productos1.map(item => (
                            <li key={item}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="container">
                <div className="row">
                    {
                        productos2.map(producto => (
                            <div key={producto.id} className="col-md-3">
                                <div className="card border-0 text-center">
                                    <img src={producto.imagen} className="img-fluid" alt={producto.nombre} />
                                    <div className="card-body">
                                        <p className="card-text"><b>{producto.nombre}</b></p>
                                        <p className="card-text">${producto.precio}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Renderizacion