import { useEffect, useState } from "react"
import Loading from "./Loading";

const APIFetch = () => {
    const [posts, setPosts] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [enviado, setEnviado] = useState(false);
    // Estados para el Post
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    
    // Opción #1 => Usando método Fetch y método then y catch para capturar respuestas
    /* useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            setCargando(false);
        })
    }, []) */

    // Opción #2 => Usando método Fetch y usando funciones asíncronas
    useEffect(() => {
        (async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setPosts(data);
            setCargando(false);
        })()
    }, [])

    const addProduct = () => {
        const product = {title:title, price:price, description:description, category:category, image:image};

        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setEnviado(true);
        })
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>API Fetch</h1>
                    {cargando ? <Loading /> : <ol className="list-group list-group-numbered">
                        {
                            posts.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">{item.title}</div>
                                    {item.description}
                                    </div>
                                    <span className="badge text-bg-primary rounded-pill">{item.rating.rate}</span>
                                </li>
                            ))
                        }
                    </ol>}
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Título</label>
                            <input type="text" className="form-control" value={title} onInput={(e) => {setTitle(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input type="text" className="form-control" value={price} onInput={(e) => {setPrice(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <input type="text" className="form-control" value={description} onInput={(e) => {setDescription(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Categoría</label>
                            <input type="text" className="form-control" value={category} onInput={(e) => {setCategory(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Imagen</label>
                            <input type="text" className="form-control" value={image} onInput={(e) => {setImage(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={addProduct}>Enviar</button>
                    </form>
                    <div className="my-5">
                        {enviado && <div className="alert alert-success text-center p-3" role="alert">Los datos se enviaron correctamente!</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APIFetch