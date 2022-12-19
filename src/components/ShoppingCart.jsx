import React from 'react';
import flechita from '../../public/assets/icons/flechita.svg';
import close_icon from '../../public/assets/icons/icon_close.png';
import logocart from '../../public/assets/icons/bt_add_to_cart.svg';
import '../styles/components/ShoppingCart.scss';

const ShoppingCart = () => {
    return (
        <aside className="product-detail">
            <div className="title-container">
                <img src={flechita} alt="icon close" />
                <p className="title">Shopping Cart</p>        
            </div>
            <div className="articulos-container">
                <div className="shopping-cart">
                    <figure><img src="https://i.imgur.com/uYKmdB1.png" alt="fotografia de producto" /></figure>
                    <p>Headphones</p>
                    <p>$120.00</p>
                    <img src={close_icon} alt="flecha de redireccionamiento" />
                </div>
                <div className="shopping-cart">
                    <figure><img src="https://i.imgur.com/uYKmdB1.png" alt="fotografia de producto" /></figure>
                    <p>Headphones</p>
                    <p>$120.00</p>
                    <img src={close_icon} alt="flecha de redireccionamiento" />
                </div>
                <div className="shopping-cart">
                    <figure><img src="https://i.imgur.com/uYKmdB1.png" alt="fotografia de producto" /></figure>
                    <p>Headphones</p>
                    <p>$120.00</p>
                    <img src={close_icon} alt="flecha de redireccionamiento" />
                </div>
                <div className="shopping-cart">
                    <figure><img src="https://i.imgur.com/uYKmdB1.png" alt="fotografia de producto" /></figure>
                    <p>Headphones</p>
                    <p>$120.00</p>
                    <img src={close_icon} alt="flecha de redireccionamiento" />
                </div>
            </div>
            <div className="my-order-content">
                <p>Total</p>
                <p>$560.00</p>
            </div>
            <button className="primary_btn">
                <img src={logocart} alt="icono carro de compras" />
                <span>Add to cart</span>
            </button>
            
        </aside>
    );
}

export default ShoppingCart;