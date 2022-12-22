//Modulos
import React , {useState,useContext} from 'react'
import AppContext from '@context/AppContext';
import MenuDesktop from '@components/MenuDesktop';
import ShoppingCart from '@containers/ShoppingCart';
import '@styles/components/Header.scss'
//imagenes
import logo from '@logos/logo_yard_sale.svg';
import icon_menu from '@icons/icon_menu.svg';
import shopping_cart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle,setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const {state} = useContext(AppContext);

    const handleToggle = () =>{
        setToggle(!toggle)//!toggle cambiará el estado de true a false y de false a true.
    }
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
                    <li onClick={handleToggle}>camilo@example.com</li>
                    <li 
                        className="navbar-icon-cart" 
                        onClick={() => setToggleOrders(!toggleOrders)}
                    >
                        <img src={shopping_cart} alt="shopping cart" />
                        {state.cart.length > 0 ? <span>{state.cart.length}</span>: null}
                    </li>
                </ul>
            </div>
            {toggle && <MenuDesktop />}
            {toggleOrders && <ShoppingCart />}
        </nav>
    )
}

export default Header