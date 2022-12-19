import React from 'react'
import '../styles/containers/MiOrden.scss';

const MiOrden = () => {
    return (
        <section className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>
                <div className="my-order-content">
                    <p>
                        <span>04.25.2022</span>
                        <span>6 artículos</span>
                    </p>
                    <p>$560.00</p>
                </div>
                <div className="shopping-cart">
                    <figure><img src="https://i.imgur.com/uYKmdB1.png" alt="fotografia de producto" /></figure>
                    <p>Headphones</p>
                    <p>$120.00</p>
                </div>
                <div className="shopping-cart">
                    <figure><img src="https://i.imgur.com/uYKmdB1.png" alt="fotografia de producto" /></figure>
                    <p>Headphones</p>
                    <p>$120.00</p>
                </div>
                <div className="shopping-cart">
                    <figure><img src="https://i.imgur.com/uYKmdB1.png" alt="fotografia de producto" /></figure>
                    <p>Headphones</p>
                    <p>$120.00</p>
                </div>
                <div className="shopping-cart">
                    <figure><img src="https://i.imgur.com/uYKmdB1.png" alt="fotografia de producto" /></figure>
                    <p>Headphones</p>
                    <p>$120.00</p>
                </div>
            </div>
        </section>
    )
}

export default MiOrden;