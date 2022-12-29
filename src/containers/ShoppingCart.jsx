import React ,{useContext} from 'react';
import Link from 'next/link';
import flechita from '@icons/flechita.svg';
import Image from 'next/image';
import ShoppingCartItem from '@components/ShoppingCartItem';
import AppContext from '@context/AppContext';

import styles from '@styles/containers/ShoppingCart.module.scss';

const ShoppingCart = (props) => {
    console.log(props)
    const {state} = useContext(AppContext)
    const sumTotal = () =>{
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer,0);
        return sum
    }
    return (
        <aside className={styles["shopping-cart-container"]}>
            <div onClick={props.handleCartToggle}  className={styles["title-container-shopping-cart"]}>
                <Image  src={flechita} alt="icon close" />
                <p className={styles["title-shopping-cart"]}>Shopping Cart</p>        
            </div>
            <div className={styles["articulos-container"]}>
                {state.cart.length == 0? <p className={styles['mjs-add-products']}>Add a product into the Shopping Cart</p>:null}
                {state.cart.map((product,index)=>(
                    <ShoppingCartItem 
                        product = {product}
                        key={index}
                        indexValue={index}
                    />
                ))}
            </div>
            <div className={styles["my-order-content"]}>
                <p>Total</p>
                <p>${sumTotal()}</p>
            </div>
            <Link href="/checkout">
                <button disabled={state.cart.length == 0? true:false} className="primary_btn">
                    <span>Checkout</span>
                </button>
            </Link>
        </aside>
    );
}

export default ShoppingCart;