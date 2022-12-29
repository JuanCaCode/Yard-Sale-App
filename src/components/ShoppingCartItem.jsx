import React, {useContext} from 'react'
import Image from 'next/image';
import close_icon from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import styles from '@styles/containers/ShoppingCart.module.scss';

const ShoppingCartItem = (data) => {
    const {product, indexValue} = data;
    const {removeFromCart} = useContext(AppContext);
    return (
        <div className={styles["shopping-cart"]}>
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <Image className={styles['close-x']} onClick={()=> removeFromCart(indexValue)} src={close_icon} alt="flecha de redireccionamiento" />
        </div>
    )
}

export default ShoppingCartItem