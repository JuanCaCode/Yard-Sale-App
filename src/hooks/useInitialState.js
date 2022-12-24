import { useState } from "react";

const initialState = { //Se instancia el objeto donde se van a guardar los productos del carrito de compras
    cart:[],
    currentProduct:{},
}

//Se crea la función controladora de eventos para el Shopping Cart
const  useInitialState = () =>{
    const [state, setState] = useState(initialState); //Se instancia un useState con el modelo de initialState

    const addToCart = (payload) =>{ // Función para agregar productos al carrito de compras
        setState({
            ...state, //Por cada activación de la función, va a mantener los datos existentes
            cart:[...state.cart, payload], //Por cada activación de la función, va a mantener los productos existentes
        })
    }

    const removeFromCart = (payload) => { // Función para eliminar un producto de la lista de compras. Recibe un payload igual al index del producto en el array
        setState({
            ...state,
            cart:state.cart.filter((items,index) => index !== payload ), //se filta el producto según el index y se elmina. 
        })
    }

    const addToDetail = (payload) => {
        setState({
            ...state,
            cart:[...state.cart], 
            currentProduct : payload
        })
    }

    return {
        state,
        addToCart,
        removeFromCart,
        addToDetail
    }
}

export default useInitialState;