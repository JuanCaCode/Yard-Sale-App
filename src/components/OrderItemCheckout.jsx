import React from 'react'
import styles from '@styles/pages/Checkout.module.scss';

import Image from 'next/image';
const OrderItemCheckout = ({product}) => {
    console.log(product)
    return (
        <div className={styles["shopping-cart"]}>
            <figure>
                <Image
                    className={styles["shopping-cart-image-thumb"]}
                    width={80} height={80}
                    src={product.images[0]}
                    alt="fotografia de producto"
                />
            </figure>

            <p>{product.title? product.title :"no hay titlo"}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default OrderItemCheckout;