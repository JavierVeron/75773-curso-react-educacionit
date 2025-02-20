import { useState } from "react"

const MensajeInicioSesion = () => {
    return (
        <div className="alert alert-danger text-center" role="alert">Debe inicar sesión!</div>
    )
}

const MensajeSesionIniciada = () => {
    return (
        <div className="alert alert-success text-center" role="alert">Sesión Iniciada!</div>
    )
}

const RenderizadoCondicional = () => {
    let isLoggedIn = true;
    let mostrar;
    const [visible, setVisible] = useState(true);

    // Validación con Bloque IF
    /* if (isLoggedIn) {
        mostrar = "Usuario Logueado!";
    } else {
        mostrar = "Iniciar Sesión!"
    } */
    // Validación con operador Ternario
    /* mostrar = isLoggedIn ? "Usuario Logueado!" : "Iniciar Sesión!"; */


    if (!visible) {
        return (
            <div className="alert alert-danger text-center" role="alert">Debe recargar la página!</div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Renderizado Condicional</h1>
                    {/* {mostrar} */}
                    {/* {isLoggedIn && <div className="alert alert-danger" role="alert">Debe inicar sesión!</div>} */}
                    {/* {isLoggedIn && <MensajeInicioSesion />} */}
                    {isLoggedIn ? <MensajeSesionIniciada /> : <MensajeInicioSesion />}
                    {visible ? <MensajeInicioSesion /> : ""}
                    {visible && <button className="btn btn-primary" onClick={() => {setVisible(false)}}>Ocultar Mensaje</button>}
                </div>
            </div>
        </div>
    )
}

export default RenderizadoCondicional