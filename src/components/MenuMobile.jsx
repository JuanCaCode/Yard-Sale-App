import React , {useContext} from 'react';
import AppContext from '@context/AppContext';
import Link from 'next/link';
import styles from '@styles/components/MenuMobile.module.scss';

const MenuMobile = () => {
    const {setCategoryFilter, setToggleMobileMenu} = useContext(AppContext);
    const handleCategory = (id) => {
        setCategoryFilter(id);
        setToggleMobileMenu(false)
    };

    return (
        <div className={styles["mobile-menu"]}>
            <ul className={styles["menu_list_mobile"]}>
                <li>CATEGORIES</li>
                <li><Link href={"/#anchor-categories-menu"} onClick={()=>handleCategory("all")}>All</Link></li>
                <li><Link href={"/#anchor-categories-menu"} onClick={()=>handleCategory(1)}>Clothes</Link></li>
                <li><Link href={"/#anchor-categories-menu"} onClick={()=>handleCategory(2)}>Electronics</Link></li>
                <li><Link href={"/#anchor-categories-menu"} onClick={()=>handleCategory(3)}>Furnitures</Link></li>
                <li><Link href={"/#anchor-categories-menu"} onClick={()=>handleCategory(4)}>Shoes</Link></li>
                <li><Link href={"/#anchor-categories-menu"} onClick={()=>handleCategory(5)}>Others</Link></li>
            </ul>
            <div>
                <ul className={styles["menu_list_mobile"]}>
                    <li><Link href="/myaccount/orders"  onClick={()=>setToggleMobileMenu(false)}>My orders</Link></li>
                    <li><Link href="/myaccount" onClick={()=>setToggleMobileMenu(false)}>My account</Link></li>
                </ul>
                <ul className={`${styles["menu_list_mobile"]} ${styles["last_i_menu"]}`}>
                    <li><Link href="/myaccount" onClick={()=>setToggleMobileMenu(false)}>camilo@example.com</Link></li>
                    <li><Link href="/login" onClick={()=>setToggleMobileMenu(false)}>Sign out</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuMobile