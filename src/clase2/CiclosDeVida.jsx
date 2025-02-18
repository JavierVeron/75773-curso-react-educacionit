import { useEffect, useState } from "react"

const CiclosDeVida = () => {
    const [contador, setContador] = useState(1);
    const [contador2, setContador2] = useState(1);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    const incrementar2 = () => {
        setContador2(contador2 + 1);
    }

    const decrementar2 = () => {
        setContador2(contador2 - 1);
    }

    // Opción #1 - Sin dependencias (o sin parámetros) solo se ejecuta 1 sola vez
    useEffect(() => {
        console.log("2- Actualización del Componente");

        return () => {
            console.log("3- Desmontaje del Componente");
        }
    }, [])

    // Opción #2 - Con dependencias (o con parámetros) solo se va a ejecutar cuando detecte un cambio el estado que pasamos como dependencia
    /* useEffect(() => {
        console.log("2- Actualización del Componente -> Contador #1");
    }, [contador])

    useEffect(() => {
        console.log("2- Actualización del Componente -> Contador #2");
    }, [contador2])

    useEffect(() => {
        console.log("2- Actualización del Componente");
    }, [contador, contador2]) */

    // Opción #3 - Siempre se a ejecutar cuando detecte un cambio en cualquier estado o prop
    /* useEffect(() => {
        console.log("2- Actualización del Componente"); 
    }) */

    console.log("1- Montaje del Componente");

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Ciclos de Vida</h1>
                    <p>Valor del Contador #1: <b>{contador}</b></p>
                    <p><button className="btn btn-primary" onClick={incrementar}>Incrementar (+)</button> <button className="btn btn-primary" onClick={decrementar}>Decrementar (-)</button></p>
                    <p>Valor del Contador #2: <b>{contador2}</b></p>
                    <p><button className="btn btn-primary" onClick={incrementar2}>Incrementar (+)</button> <button className="btn btn-primary" onClick={decrementar2}>Decrementar (-)</button></p>
                </div>
            </div>
        </div>
    )
}

export default CiclosDeVida