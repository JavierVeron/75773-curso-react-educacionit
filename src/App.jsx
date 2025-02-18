import { useState } from "react";
import CiclosDeVida from "./clase2/CiclosDeVida";
import Eventos from "./clase2/Eventos";
import Props from "./clase2/Props";
import Renderizacion from "./clase2/Renderizacion";
import States from "./clase2/States";

function App() {
  let mensaje1 = "Hola a TODOS!"
  let mensaje2 = "Chau a todos!"
  const [visible, setVisible] = useState(true);

  const desmontarComponente = () => {
    setVisible(false);
  }

  return (
    <>
      {/* <Renderizacion /> */}   
      {/* <Props mensajeA={mensaje1} mensajeB={mensaje2} mensajeC={"Este es otro mensaje"}>
        <h1 className="text-white bg-primary">Educación IT</h1>
        <h3>Curso de React JS</h3>
      </Props> */} 
      {/* <States /> */}
      {/* <Eventos /> */}
      {visible ? <CiclosDeVida /> : ""}
      <p><button className="btn btn-primary" onClick={desmontarComponente}>Desmontar Componente</button></p>
    </>
  )
}

export default App
