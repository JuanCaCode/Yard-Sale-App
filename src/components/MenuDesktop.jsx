import React from 'react';
import '@styles/components/MenuDesktop.scss';

const MenuDesktop = () => {
    return (
        <div className="menu-desktop">
            <ul className="menu_list">
                <li><a href="">My orders</a></li>
                <li><a href="">My account</a></li>
                <li><a href="">Sign out</a></li>
            </ul>
        </div>
    )
}

export default MenuDesktop;