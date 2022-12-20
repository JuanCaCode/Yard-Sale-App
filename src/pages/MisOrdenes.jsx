import React from 'react'
import '../styles/pages/MisOrdenes.scss';
import OrdenItem from '../components/OrderItemMisOrdenes';

const MisOrdenes = () => {
    return (
        <section className="my-order">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>
                <OrdenItem />
                <OrdenItem />
                <OrdenItem />
                <OrdenItem />
                <OrdenItem />
            </div>
        </section>
    )
}

export default MisOrdenes;