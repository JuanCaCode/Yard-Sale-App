import React from 'react'
import flechita from '@icons/flechita.svg';

const OrdenItem = () => {
    return (
        <div className="my-order-content">
            <p>
                <span>04.25.2022</span>
                <span>6 artículos</span>
            </p>
            <p>$560.00</p>
            <img src={flechita} alt="flecha de redireccionamiento"/>
        </div>
    )
}

export default OrdenItem;