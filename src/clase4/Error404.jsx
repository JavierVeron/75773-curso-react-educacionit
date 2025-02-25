import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="my-3 fw-bold">Error 404!</h1>
                    <h3 className="my-3">La página que estás buscando no existe!</h3>
                    <p className="my-3">
                        <Link to={"/"} className="btn btn-warning">Volver a la Página Principal</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Error404