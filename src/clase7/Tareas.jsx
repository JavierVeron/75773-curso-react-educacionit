import { useState } from "react"
import { createStore } from "redux"

// Definimos un array de Tareas
const tasks = [
    {id:1, nombre:"Levantarse de la cama", completado:true},
    {id:2, nombre:"Trabajar por la mañana", completado:true},
    {id:3, nombre:"Almorzar", completado:true},
    {id:4, nombre:"Dormir la siesta", completado:false},
    {id:5, nombre:"Ir a correr", completado:true},
    {id:6, nombre:"Merendar", completado:true},
    {id:7, nombre:"Cenar", completado:false},
    {id:8, nombre:"Ver una Película o Serie", completado:false},
    {id:9, nombre:"Dormir", completado:false}
]

// Definimos las Acciones
const SHOW_COMPLETE = {
    type:"SHOW_COMPLETE"
}

const SHOW_ALL = {
    type:"SHOW_ALL"
}

const FILTER_TASKS = (filter) => ({
    type:"FILTER_TASKS",
    payload:filter
})

// Definir nuestro Reducer
const taskReducer = (prevState = tasks, action) => {
    switch(action.type) {
        case "SHOW_ALL":                        
            return {
                ...prevState,
                filtered:tasks
            }
        case "SHOW_COMPLETE":
            return {
                ...prevState,
                filtered:tasks.filter(item => item.completado)
            }
        case "FILTER_TASKS":            
            return {
                ...prevState,
                filtered:tasks.filter(item => item.completado == action.payload)
            }
        default:
            return prevState
    }
}

// Vinculamos el Reducer con nuestro Store
const store = createStore(taskReducer);

const Tareas = () => {
    const [items, setItems] = useState(store.getState());

    const mostrarTodas = () => {                
        store.dispatch(SHOW_ALL);
    }

    const mostrarCompletadas = () => {
        store.dispatch(SHOW_COMPLETE)
    }

    const mostrarNoCompletadas = () => {
        store.dispatch(FILTER_TASKS(false));
    }

    store.subscribe(() => {
        setItems(store.getState().filtered);
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Redux - Tareas</h1>
                    <button className="btn btn-primary btn-sm mx-1" onClick={mostrarTodas}>Mostrar Todas</button>
                    <button className="btn btn-primary btn-sm mx-1" onClick={mostrarCompletadas}>Mostrar Completados</button>
                    <button className="btn btn-primary btn-sm mx-1" onClick={mostrarNoCompletadas}>Mostrar No Completados</button>
                    <ul className="list-group list-group-flush">
                        {
                            items.map(item => (
                                <li key={item.id} className="list-group-item">{item.nombre} <span className={`badge ${item.completado ? "text-bg-success" : "text-bg-danger"}`}>{item.completado ? "Completado" : "No Completado"}</span></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tareas