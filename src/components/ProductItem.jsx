import React, {useContext} from 'react'
import AppContext from '@context/AppContext';
import iconcart from '@icons/bt_add_to_cart.svg'
import Image from 'next/image';
import styles from '@styles/components/ProductItem.module.scss'

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
                <Image 
                className={styles["card-img"]} 
                src={product.images[0]}
                alt={product.title}
                fill
                sizes='(max-width: 768px) 140px,240px'
                priority={true}
                />
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