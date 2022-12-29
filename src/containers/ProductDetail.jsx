import React from 'react'
import close_icon from '@icons/icon_close.png';
import ProductInfo from '@components/ProductInfo';
import Image from 'next/image';
import styles from '@styles/containers/ProductDetail.module.scss';

const ProductDetail = ({handleDetailToggle}) => {
    return (
        
        <aside className={styles["product-detail"]}>
            <div className={styles["product-detail-close"]} onClick={()=>handleDetailToggle('close')}>
                <Image src={close_icon} alt="icon close" />
            </div>
            <ProductInfo />
        </aside>
    )
}
export default ProductDetail