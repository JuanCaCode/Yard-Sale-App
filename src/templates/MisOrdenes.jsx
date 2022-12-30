import React from 'react'
import styles from '@styles/pages/MisOrdenes.scss';
import OrdenItem from '@components/OrderItemMisOrdenes';

const MisOrdenes = () => {
    return (
        <section className={styles["my-order"]}>
            <div className={styles["my-order-container"]}>
                <h1 className={styles["title"]}>My orders</h1>
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