import React ,{useContext} from 'react';
import flechita from '@icons/flechita.svg';
import ShoppingCartItem from '@components/ShoppingCartItem';
import AppContext from '@context/AppContext';

import '../styles/containers/ShoppingCart.scss';

const ShoppingCart = () => {
    const {state} = useContext(AppContext)
    const sumTotal = () =>{
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer,0);
        return sum
    }
    return (
        <aside className="shopping-cart-container">
            <div className="title-container-shopping-cart">
                <img src={flechita} alt="icon close" />
                <p className="title-shopping-cart">Shopping Cart</p>        
            </div>
            <div className="articulos-container">
                {state.cart.map((product,index)=>(
                    <ShoppingCartItem 
                        product = {product} 
                        key={index}
                        indexValue={index}
                    />
                ))}

            </div>
            <div className="my-order-content">
                <p>Total</p>
                <p>${sumTotal()}</p>
            </div>
            <button className="primary_btn">
                <span>Checkout</span>
            </button>
        </aside>
    );
}

export default ShoppingCart;