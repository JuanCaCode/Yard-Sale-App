import React from 'react';
import '@styles/components/MenuMobile.scss';

const MenuMobile = () => {
    return (
        <div className="mobile-menu">
            <ul className="menu_list_mobile">
                <li>CATEGORIES</li>
                <li><a href="/">All</a></li>
                <li><a href="/">Clothes</a></li>
                <li><a href="/">Electronics</a></li>
                <li><a href="/">Furnitures</a></li>
                <li><a href="/">Toys</a></li>
                <li><a href="/">Other</a></li>
            </ul>
            <div>
                <ul className="menu_list_mobile">
                    <li><a href="">My orders</a></li>
                    <li><a href="">My account</a></li>
                </ul>
                <ul className="menu_list_mobile last_i_menu">
                    <li><a href="">camilo@example.com</a></li>
                    <li><a href="">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuMobile