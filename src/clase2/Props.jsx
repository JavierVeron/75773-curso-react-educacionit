const Props = ({mensajeA, mensajeB, children}) => {
    return (
        <>
            <p>{mensajeA}</p>
            <p>{mensajeB}</p>
            {children}
        </>
    )
}

export default Props