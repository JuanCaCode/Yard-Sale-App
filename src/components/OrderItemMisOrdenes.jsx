import React from 'react'
import flechita from '@icons/flechita.svg';
import Image from 'next/image';
import styles from '@styles/pages/MisOrdenes.module.scss';

const OrdenItem = () => {
    return (
        <div className={styles["my-order-content"]}>
            <p>
                <span>04.25.2022</span>
                <span>6 artículos</span>
            </p>
            <p>$560.00</p>
            <Image src={flechita} alt="flecha de redireccionamiento"/>
        </div>
    )
}

export default OrdenItem;