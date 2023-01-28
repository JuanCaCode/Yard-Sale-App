import React, { useContext } from 'react'
import AppContext from '@context/AppContext';
import iconcart from '@icons/bt_add_to_cart.svg'
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from '@styles/components/ProductItem.module.scss'
import 'animate.css';
const ProductItem = ({ handleDetailToggle, product }) => {
    const { addToCart, addToDetail } = useContext(AppContext);
    const handleClick = producto => {
        addToCart(producto);
    }
    const handleProductDetail = (producto) => {
        addToDetail(producto);
        handleDetailToggle('open');
    }
    return (
        <article className={styles["product-card"]}>
            <figure className={`animate__animated animate__pulse animate__delay-1s ${styles['product-card-img']}`} onClick={() => handleProductDetail(product)}>
                <LazyLoadImage
                    className={styles["card-img"]}
                    key={product.id}
                    src={product.images[0]}
                    alt={product.title}
                    width={"100%"}
                    // priority={true}
                    sizes='(max-width: 768px) 140px,340px'
                    // placeholderSrc={product.images[0]}
                    effect="blur"
                />
            </figure>
            <div className={styles["product-card-info"]}>
                <div className={styles["details-container"]}>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <Image src={iconcart} alt="botón de añadir a carrito de compras" />
                </figure>
            </div>
        </article>
    )
}

export default ProductItem;