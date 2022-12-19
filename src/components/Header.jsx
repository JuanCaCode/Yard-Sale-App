import React from 'react'
import '../styles/components/Header.scss'
import logo from '../../public/assets/logos/logo_yard_sale.svg';
import icon_menu from '../../public/assets/icons/icon_menu.svg';
import shopping_cart from '../../public/assets/icons/icon_shopping_cart.svg';

const Header = () => {
    return (
        <nav>
            <img className="menu-mobile-img" src={icon_menu} alt="icono de menu mobile" />
            <img className="logo" src={logo} alt="logo" />
            <div className="navbar-left">
                <ul>
                    <li><a href="/">All</a></li>
                    <li><a href="/">Clothes</a></li>
                    <li><a href="/">Electronics</a></li>
                    <li><a href="/">Furnitures</a></li>
                    <li><a href="/">Toys</a></li>
                    <li><a href="/">Otros</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li>camilo@example.com</li>
                    <li className="navbar-icon-cart">
                        <img src={shopping_cart} alt="shopping cart" />
                        <span>2</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header