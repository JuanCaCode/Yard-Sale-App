import React from 'react'
import close_icon from '../../public/assets/icons/icon_close.png';

const ShoppingCartItem = () => {
    return (
        <div className="shopping-cart">
            <figure>
                <img src="https://i.imgur.com/uYKmdB1.png" alt="fotografia de producto" />
            </figure>
            <p>Headphones</p>
            <p>$120.00</p>
            <img src={close_icon} alt="flecha de redireccionamiento" />
        </div>
    )
}

export default ShoppingCartItem