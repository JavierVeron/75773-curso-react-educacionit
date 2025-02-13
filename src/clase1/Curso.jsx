// Opción #1 => Props como objeto
// const Curso = (props) => {

// Opción #2 => Desestructurar las propiedades del objeto en el parámetro de la función
const Curso = ({titulo, comentario}) => {   

    return (
        <>
            <h3 className="colorRojo">Curso de {titulo} {comentario ? " (" + comentario + ")" : ""}</h3>
        </>
    )
}

export default Curso