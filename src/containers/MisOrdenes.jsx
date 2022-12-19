import React from 'react'
import '../styles/containers/MisOrdenes.scss';
import flechita from '../../public/assets/icons/flechita.svg';

const MisOrdenes = () => {
    return (
        <section className="my-order">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>
                <div className="my-order-content">
                    <p>
                        <span>04.25.2022</span>
                        <span>6 artículos</span>
                    </p>
                    <p>$560.00</p>
                    <img src={flechita} alt="flecha de redireccionamiento"/>
                </div>
                <div className="my-order-content">
                    <p>
                        <span>04.25.2022</span>
                        <span>6 artículos</span>
                    </p>
                    <p>$560.00</p>
                    <img src={flechita} alt="flecha de redireccionamiento"/>
                </div>
                <div className="my-order-content">
                    <p>
                        <span>04.25.2022</span>
                        <span>6 artículos</span>
                    </p>
                    <p>$560.00</p>
                    <img src={flechita} alt="flecha de redireccionamiento"/>
                </div>
                <div className="my-order-content">
                    <p>
                        <span>04.25.2022</span>
                        <span>6 artículos</span>
                    </p>
                    <p>$560.00</p>
                    <img src={flechita} alt="flecha de redireccionamiento"/>
                </div>
                <div className="my-order-content">
                    <p>
                        <span>04.25.2022</span>
                        <span>6 artículos</span>
                    </p>
                    <p>$560.00</p>
                    <img src={flechita} alt="flecha de redireccionamiento"/>
                </div>
                <div className="my-order-content">
                    <p>
                        <span>04.25.2022</span>
                        <span>6 artículos</span>
                    </p>
                    <p>$560.00</p>
                    <img src={flechita} alt="flecha de redireccionamiento"/>
                </div>
                <div className="my-order-content">
                    <p>
                        <span>04.25.2022</span>
                        <span>6 artículos</span>
                    </p>
                    <p>$560.00</p>
                    <img src={flechita} alt="flecha de redireccionamiento"/>
                </div>
            </div>
        </section>
    )
}

export default MisOrdenes;