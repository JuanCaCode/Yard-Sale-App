import React from 'react';
import styles from '@styles/components/MenuDesktop.module.scss';

const MenuDesktop = () => {
    return (
        <div className={styles['menu-desktop']}> {/*falta agregar menu-desktop */}
            <ul className={styles['menu_list']}>
                <li><a href="">My orders</a></li>
                <li><a href="">My account</a></li>
                <li><a href="">Sign out</a></li>
            </ul>
        </div>
    )
}

export default MenuDesktop;