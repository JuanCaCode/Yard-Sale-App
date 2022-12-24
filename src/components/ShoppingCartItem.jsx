import React, {useContext} from 'react'
import close_icon from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

const ShoppingCartItem = (data) => {
    const {product, indexValue} = data;
    const {removeFromCart} = useContext(AppContext);
    return (
        <div className="shopping-cart">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img className='close-x' onClick={()=> removeFromCart(indexValue)} src={close_icon} alt="flecha de redireccionamiento" />
        </div>
    )
}

export default ShoppingCartItem