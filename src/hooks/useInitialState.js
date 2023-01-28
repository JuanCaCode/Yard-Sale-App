import { useEffect, useState } from 'react';

const initialState = {
  //Se instancia el objeto donde se van a guardar los productos del carrito de compras
  cart: [],
  currentProduct: {},
  
};
//Se crea la función controladora de eventos para el Shopping Cart
const useInitialState = () => {
  const [state, setState] = useState(initialState); //Se instancia un useState con el modelo de initialState
  const [ categoryFilter, setCategoryFilter ] = useState(0);
  
  const addToCart = (payload) => {
    // Función para agregar productos al carrito de compras
    const settingState = ()=>{
      return {
        ...state, //Por cada activación de la función, va a mantener los datos existentes
        cart: [...state.cart, payload], //Por cada activación de la función, va a mantener los productos existentes
      }
    }
    setState(settingState());
    localStorage.removeItem("stateStoraged")
    localStorage.setItem("stateStoraged", JSON.stringify(settingState()))
  };

  const removeFromCart = (payload) => {
    // Función para eliminar un producto de la lista de compras. Recibe un payload igual al index del producto en el array
    const settingState = ()=>{
      return {
        ...state,
        cart: state.cart.filter((items, index) => index !== payload), //se filta el producto según el index y se elmina.
      }
    }
    setState(settingState());
    localStorage.removeItem("stateStoraged")
    localStorage.setItem("stateStoraged", JSON.stringify(settingState()));
  };

  const addToDetail = (payload) => {
    setState({
      ...state,
      cart: [...state.cart],
      currentProduct: payload,
    });
  };

  //ACTUALIZA EL STATE CADA QUE SE RECARGA LA PAGINA
  useEffect(()=>{
    const storage = JSON.parse(localStorage.getItem('stateStoraged'));
    if(storage){
      setState(storage);
    }
  },[])

  return {
    state,
    addToCart,
    removeFromCart,
    addToDetail,
    categoryFilter,
    setCategoryFilter
  };
};

export default useInitialState;
