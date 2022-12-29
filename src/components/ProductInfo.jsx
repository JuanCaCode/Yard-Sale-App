import React, {useContext} from 'react'
import AppContext from '@context/AppContext'
import logocart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/containers/ProductDetail.module.scss';
import Image from 'next/image';

const ProductInfo = () => {
    const {state, addToCart,} = useContext(AppContext)
    const pro=state.currentProduct;
    return (
        <>
            <img className={styles["img-detail-principal"]} src={pro.images[0]} alt={pro.title}  />
            <div className={styles["product-info"]}>
                <p>${pro.price}</p>
                <p>{pro.title}</p>
                <p>{pro.description}</p>
                <button onClick={()=>addToCart(pro)} className="primary_btn">
                    <Image src={logocart} alt="icono carro de compras" />
                    <span>Add to cart</span>
                </button>
            </div>
        </>
    )
}

export default ProductInfo