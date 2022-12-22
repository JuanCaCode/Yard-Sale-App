import React from 'react'
import close_icon from '@icons/icon_close.png';
import ProductInfo from '@components/ProductInfo';
import '@styles/containers/ProductDetail.scss';

const ProductDetail = () => {
    return (
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src={close_icon} alt="icon close" />
            </div>
            <ProductInfo />
        </aside>
    )
}

export default ProductDetail