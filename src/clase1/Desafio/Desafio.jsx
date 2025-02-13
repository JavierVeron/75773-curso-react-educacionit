import Boton from "./Boton"
import Imagen from "./Imagen"
import Subtitulo from "./Subtitulo"
import Titulo from "./Titulo"

const Desafio = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2 my-5">
                    <Titulo />
                    <Subtitulo />
                    <Boton />
                </div>
                <div className="col-md-4">
                    <Imagen />
                </div>
            </div>
        </div>
    )
}

export default Desafio