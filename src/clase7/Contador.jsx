import { useState } from "react";
import {createStore} from "redux"

// Definimos el Reducer
const counter = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return (state + 1);
        case "DECREMENT":
            return (state - 1);
        default:
            return state;
    }
}

// Asociar mi función Redux al Store de Redux
const store = createStore(counter);

// Subscribiendo a las acciones disparadas de mi Redux
store.subscribe(() => {
    console.log("Valor del Estado: " + store.getState());
})

//store.dispatch({type:"INCREMENT"});
//store.dispatch({type:"INCREMENT"});
//store.dispatch({type:"DECREMENT"});

const Contador = () => {
    const [numero, setNumero] = useState(store.getState());

    const incrementar = () => {
        store.dispatch({type:"INCREMENT"});
        setNumero(store.getState());
    }

    const decrementar = () => {
        store.dispatch({type:"DECREMENT"});
        setNumero(store.getState());
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Redux - Contador</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary">{numero}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contador