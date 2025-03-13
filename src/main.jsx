import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import CartReducer from './clase8/CartReducer.jsx'

// Definir un Middleware
const myMiddleWare = store => next => action => {
    console.log(store.getState());
    console.log("Action: " + action.type);
    console.log("Fin del Middleware");

    if (action.type == "AGREGAR_PRODUCTO") {
        console.info("Agregaste un Producto al Carrito!");
    }

    if (action.type == "ELIMINAR_PRODUCTO") {
        console.warn("Eliminaste un Producto del Carrito!");
    }

    next(action);
}

const store = createStore(CartReducer, applyMiddleware(myMiddleWare));

createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>)
