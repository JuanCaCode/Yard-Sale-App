import { useState } from "react";

const initialState = { //initial state base
    cart:[]
}

const  useInitialState = () =>{
    const [state, setState] = useState(initialState);

    const addToCart = (payload) =>{
        setState({
            ...state, //mantener los datos o la indormación que tenga. 
            cart:[...state.cart, payload] //agregará al carrito un producto nuevo y mantendrá los demás.
        })
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart:state.cart.filter((items,index) => index !== payload )
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;