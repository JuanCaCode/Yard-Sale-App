import React from 'react';
import AppLayout from '@layouts/AppLayout';
import styles from '@styles/pages/MisOrdenes.module.scss';
import OrdenItem from '@components/OrderItemMisOrdenes';

const MisOrdenes = () => {
    return (
        <AppLayout>
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
        </AppLayout>
    )
}

export default MisOrdenes;