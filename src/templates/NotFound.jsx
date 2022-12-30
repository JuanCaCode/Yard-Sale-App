import React from 'react';
import NotFoundErrorImg from '@images/404-error.svg';
import Link from 'next/link';
import Image from 'next/image';


const NotFound = () => {
    let styleDiv ={
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems: "center",
    }
    return (
        <div style={styleDiv}>
            <Image style={{width:"30%"}} src={NotFoundErrorImg} alt="Error 404, no se encontró la página que buscas" />
            <h3>No hemos encontrado a dónde quieres ir, pero puedes regresar al <Link href="/"> inicio.</Link></h3>
        </div>
    )
}

export default NotFound;