import { useState } from "react"

const Eventos = () => {
    const [mensaje, setMensaje] = useState("");
    const [pais, setPais] = useState("");

    const modificarMensaje = () => {
        setMensaje("Curso de React JS!")
    }

    const seleccionarPais = (e) => {
        setPais(e.target.value);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Eventos</h1>
                    <p><button className="btn btn-primary" onClick={modificarMensaje}>Modificar Mensaje</button></p>
                    <p>{mensaje}</p>
                    <p><select className="form-select" onChange={seleccionarPais}>
                        <option value="">Seleccione País</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Chile">Chile</option>
                    </select></p>
                    <p>País seleccionado: <b>{pais}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Eventos