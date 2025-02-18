import { useState } from "react";

const States = () => {
    // Esto es un variable
    //let valor = 1;

    // Esto es un estado (states)
    const [valor, setValor] = useState(0);
    const [mensaje, setMensaje] = useState("Escriba algo");

    const aumentarValor = () => {
        setValor(valor + 1);
    }

    const vaciarMensaje = () => {
        setMensaje("");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Estados</h1>
                    <p><button className="btn btn-primary" onClick={aumentarValor}>Aumentar (+)</button></p>
                    <p>Valor: {valor}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <input type="text" className="form-control" onInput={(e) => {setMensaje(e.target.value)}} value={mensaje} />
                        <div className="form-text">{mensaje}</div>
                        <button className="btn btn-primary btn-small" onClick={vaciarMensaje}>Vaciar Mensaje</button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default States