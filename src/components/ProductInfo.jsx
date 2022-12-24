import React, {useContext} from 'react'
import AppContext from '@context/AppContext'
import logocart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    const {state, addToCart,} = useContext(AppContext)
    const pro=state.currentProduct;
    return (
        <>
            <img className="img-detail-principal" src={pro.images[0]} alt={pro.title}  />
            <div className="product-info">
                <p>${pro.price}</p>
                <p>{pro.title}</p>
                <p>{pro.description}</p>
                <button onClick={()=>addToCart(pro)} className="primary_btn">
                    <img src={logocart} alt="icono carro de compras" />
                    <span>Add to cart</span>
                </button>
            </div>
        </>
    )
}

export default ProductInfo