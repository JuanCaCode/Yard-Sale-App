import React from 'react'
import iconcart from '../../public/assets/icons/bt_add_to_cart.svg'
const ProductItem = () => {
    return (
        <article className="product-card">
            <img src="https://i.imgur.com/uYKmdB1.png" alt="product1" />
            <div className="product-card-info">
                <div className="details-container">
                    <p>$120,00</p>
                    <p>Headphones</p>
                </div>
                <figure>
                    <img src={iconcart} alt="botón de añadir a carrito de compras" />
                </figure>
            </div>
        </article>
    )
}

export default ProductItem