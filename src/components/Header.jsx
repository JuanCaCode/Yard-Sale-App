//Modulos
import React , {useState,useContext} from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import MenuDesktop from '@components/MenuDesktop';
import ShoppingCart from '@containers/ShoppingCart';
//imagenes
import logo from '@logos/logo_yard_sale.svg';
import icon_menu from '@icons/icon_menu.svg';
import shopping_cart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/components/Header.module.scss';
import Link from 'next/link';

const Header = () => {
    const {state} = useContext(AppContext);
    const [toggle,setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle);//!toggle cambiará el estado de true a false y de false a true.
    };
    const handleCartToggle = () =>{
        setToggleOrders(!toggleOrders);
    };

    return (
        <>
        <header>
            <nav className={styles.nav}>
                <Image as={'image'} priority={true} className={styles["menu-mobile-img"]} src={icon_menu} alt="icono de menu mobile" />
                <Link href="/">
                    <Image as={'image'} priority={true} className={styles.logo} src={logo} alt="logo" />
                </Link>
                <div className={styles["navbar-left"]}>
                    <ul>
                        <li><Link href="/">All</Link></li>
                        <li><Link href="/">Clothes</Link></li>
                        <li><Link href="/">Electronics</Link></li>
                        <li><Link href="/">Furnitures</Link></li>
                        <li><Link href="/">Toys</Link></li>
                        <li><Link href="/">Otros</Link></li>
                    </ul>
                </div>
                <div className={styles["navbar-right"]}>
                    <ul >
                        <li onClick={handleToggle}>camilo@example.com</li>
                        <li 
                            className={styles["navbar-icon-cart"]} 
                            onClick={handleCartToggle}
                        >
                            <Image as={'image'} priority={true} src={shopping_cart} alt="shopping cart" />
                            {state.cart.length > 0 ? <span>{state.cart.length}</span>: null}
                        </li>
                    </ul>
                </div>
                {toggle && <MenuDesktop onMouseOut={handleToggle} />}
                {toggleOrders && <ShoppingCart handleCartToggle={handleCartToggle} />}
            </nav>
            
            {//Aparece fondo negro detrás que al darle click va a cerrar todos los menús abiertos
            (toggleOrders || toggle) && <div onClick={()=>{if(toggleOrders || toggle){ setToggle(false); setToggleOrders(false);};}} className='background-black'></div>
            }
        </header>        
        </>

    );
};

export default Header;