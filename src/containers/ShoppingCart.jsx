import React from 'react';
import flechita from '../../public/assets/icons/flechita.svg';
import ShoppingCartItem from '../components/ShoppingCartItem';

import '../styles/containers/ShoppingCart.scss';

const ShoppingCart = () => {
    return (
        <aside className="shopping-cart-container">
            <div className="title-container-shopping-cart">
                <img src={flechita} alt="icon close" />
                <p className="title-shopping-cart">Shopping Cart</p>        
            </div>
            <div className="articulos-container">
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
            </div>
            <div className="my-order-content">
                <p>Total</p>
                <p>$560.00</p>
            </div>
            <button className="primary_btn">
                <span>Checkout</span>
            </button>
        </aside>
    );
}

export default ShoppingCart;