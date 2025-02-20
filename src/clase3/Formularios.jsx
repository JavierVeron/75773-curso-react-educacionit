import { useState } from "react"

const Formularios = () => {
    // Definir estados
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const [usuarioError, setUsuarioError] = useState("");
    const [claveError, setClaveError] = useState("");

    const validarCampoUsuario = () => {
        if ((usuario == "") || (usuario.length < 4)) {
            setUsuarioError("Error! Debe completar el campo Usuario!");
            return false;
        } else {
            setUsuarioError("");
            return true;
        }
    }

    const validarCampoClave = () => {        
        if ((clave == "") || (clave.length < 4)) {            
            setClaveError("Error! Debe completar el campo Clave!");
            return false;
        } else {
            setClaveError("");
            return true;
        }
    }

    const limpiarCampos = () => {
        setUsuarioError("");
        setClaveError("");
    }

    const enviarFormulario = () => {
        console.log("Formularo Enviado!");
        document.getElementById("formUsuario").submit(); // Envío del Formulario
    }

    // Opción #1 - Validando Campos con botón del tipo "button"
    /* const validarCampos = () => {
        if (!validarCampoUsuario()) {            
            return false;
        }

        if (!validarCampoClave()) {
            return false;
        }
        
        limpiarCampos();
        enviarFormulario();
    } */

    // Opción #2 - Validando Campos con botón del tipo "submit"
    // Opción #3 - Definiendo en la Etiqueta Form el atributo "onSubmit"
    const validarCampos = (e) => {
        e.preventDefault(); // Detener la ejecución del envío Formulario

        if (!validarCampoUsuario()) {            
            return false;
        }

        if (!validarCampoClave()) {
            return false;
        }
        
        limpiarCampos();
        enviarFormulario();
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Formularios</h1>
                    <form id="formUsuario" method="post" onSubmit={validarCampos}>
                        <div className="mb-3">
                            <label className="form-label">Usuario</label>
                            <input type="text" className="form-control" value={usuario} onInput={(e) => {setUsuario(e.target.value)}} />
                            <div className="form-text text-danger">{usuarioError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Clave</label>
                            <input type="password" className="form-control" value={clave} onInput={(e) => {setClave(e.target.value)}} />
                            <div className="form-text text-danger">{claveError}</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formularios