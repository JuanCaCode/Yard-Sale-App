import React from 'react';
import Link from 'next/link';
import styles from '@styles/components/MenuMobile.scss';

const MenuMobile = () => {
    return (
        <div className={styles["mobile-menu"]}>
            <ul className={styles["menu_list_mobile"]}>
                <li>CATEGORIES</li>
                <li><Link href="/">All</Link></li>
                <li><Link href="/">Clothes</Link></li>
                <li><Link href="/">Electronics</Link></li>
                <li><Link href="/">Furnitures</Link></li>
                <li><Link href="/">Toys</Link></li>
                <li><Link href="/">Other</Link></li>
            </ul>
            <div>
                <ul className={styles["menu_list_mobile"]}>
                    <li><Link href="">My orders</Link></li>
                    <li><Link href="">My account</Link></li>
                </ul>
                <ul className={styles["menu_list_mobile last_i_menu"]}>
                    <li><Link href="">camilo@example.com</Link></li>
                    <li><Link href="">Sign out</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuMobile