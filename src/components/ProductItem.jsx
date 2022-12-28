import React, {useContext} from 'react'
import AppContext from '@context/AppContext';
import iconcart from '@icons/bt_add_to_cart.svg'
import styles from '@styles/components/ProductItem.module.scss'
import Image from 'next/image';

const ProductItem = ({handleDetailToggle,product}) => {
    const { addToCart, addToDetail } = useContext(AppContext);
    const handleClick = producto =>{
        addToCart(producto);
    }
    const handleProductDetail = (producto) =>{
        addToDetail(producto);
        handleDetailToggle('open');
    }
    return ( 
        <article className={styles["product-card"]}>
            <figure className={styles['product-card-img']} onClick={()=>handleProductDetail(product)}>
                {/* No le coloco Image para que no genere errores */}
                <img className={styles["card-img"]} src={product.images[0]} alt={product.title} />
            </figure>
            <div className={styles["product-card-info"]}>
                <div className={styles["details-container"]}>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={()=>handleClick(product)}>
                    <Image src={iconcart} alt="botón de añadir a carrito de compras" />
                </figure>
            </div>
        </article>
    )
}

export default ProductItem;