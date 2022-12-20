import React from 'react'
import logocart from '../../public/assets/icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <>
            <img className="img-detail-principal" src="https://i.imgur.com/uYKmdB1.png" alt="imagen de producto"  />
            <div className="product-info">
                <p>$35,00</p>
                <p>Headphones</p>
                <p>
                    The new AirPods combine intelligent design with breakthrough technology and crystal-clear sound. Powered by the new Apple H1 headphone chip, AirPods now feature hands-free access to Siri using just your voice. And up to 3 hours of talk time on a single charge.¹
                </p>
                <button className="primary_btn">
                    <img src={logocart} alt="icono carro de compras" />
                    <span>Add to cart</span>
                </button>
            </div>
        </>
    )
}

export default ProductInfo