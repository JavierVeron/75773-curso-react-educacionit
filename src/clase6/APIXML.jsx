import { useEffect, useState } from "react"
import Loading from "./Loading";

const APIXML = () => {
    const [posts, setPosts] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [enviado, setEnviado] = useState(false);
    // Estados para el Post
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("GET", "https://fakestoreapi.com/products");
        xhr.send();
        xhr.addEventListener("load", () => {
            setPosts(xhr.response);
            setCargando(false);
        })
    }, [])

    const addProduct = () => {
        const data = new FormData();
        data.append("title", title);
        data.append("price", price);
        data.append("description", description);
        data.append("category", category);
        data.append("image", image);

        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", "https://fakestoreapi.com/products");
        xhr.send(data);
        xhr.addEventListener("load", () => {
            console.log(xhr.response);
            setEnviado(true);
        })
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>API XMLHttpRequest</h1>
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

export default APIXML