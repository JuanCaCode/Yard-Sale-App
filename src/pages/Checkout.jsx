import React from 'react'
import OrderItemCheckout from '@components/OrderItemCheckout'
import '@styles/pages/Checkout.scss';

const Checkout = () => {
    return (
        <section className="checkout">
            <div className="checkout-container">
                <h1 className="title">My order</h1>
                <div className="checkout-content">
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