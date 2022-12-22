import { useEffect, useState } from "react";
import Axios from "axios";

const useGetProducts = (API) =>{ //recibe el valor de API
    const [products, setProducts] = useState([]); //creamos el hook useState para almacenar los productos
    useEffect( async()=>{
        const response = await Axios(API); //llamamos los productos de la API y los guardamos en la constante
        setProducts(response.data) //enviamos los datos de la constante a products por medio del hook useState
    }, [])

    return products; //retornamos los productos
};

export default useGetProducts;
