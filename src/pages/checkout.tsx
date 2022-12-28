import React from 'react'
import OrderItemCheckout from '@components/OrderItemCheckout'
import styles from '@styles/pages/Checkout.module.scss';

const Checkout = () => {
    return (
        <section className={styles.checkout}>
            <div className={styles["checkout-container"]}>
                <h1 className={styles.title}>My order</h1>
                <div className={styles["checkout-content"]}>
                    <p>
                        <span>04.25.2022</span>
                        <span>6 artículos</span>
                    </p>
                    <p>$560.00</p>
                </div>
                {/* Componente de items a desplegar */}
                <OrderItemCheckout />
                <OrderItemCheckout />
            </div>
        </section>
    )
}

export default Checkout;