import React, {useState} from 'react'
import iconcart from '@icons/bt_add_to_cart.svg'

const ProductItem = (data) => {
    // console.log(product.product)
    //[estado, función modificadora hacía el estado] esto parte del useState
    const [cart,setCart] = useState([]);
    const handleClick = ()=>{
        setCart([])
    }
    // console.log(product.product.id)
    return (
        <article className="product-card">
            <img src={data.product.images[0]} alt={data.product.title} />
            <div className="product-card-info">
                <div className="details-container">
                    <p>${data.product.price}</p>
                    <p>{data.product.title}</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={iconcart} alt="botón de añadir a carrito de compras" />
                </figure>
            </div>
        </article>
    )
}

export default ProductItem;