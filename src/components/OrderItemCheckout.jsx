import React from 'react'
import styles from '@styles/pages/Checkout.module.scss';
const OrderItemCheckout = () => {
    return (
        <div className={styles["shopping-cart"]}>
            <figure><img src="https://i.imgur.com/uYKmdB1.png" alt="fotografia de producto" /></figure>
            <p>Headphones</p>
            <p>$120.00</p>
        </div>
    )
}

export default OrderItemCheckout;