import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/containers/ProductsGrid.scss';
import useGetProducts from '@hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductsGrid = () => {
    const products =  useGetProducts(API); //llamamos la data de nuestra API por medio del custom hook useGetProducts
    return (
        <section className="main-container">
            <div className="cards-container">
                {products.map(product =>{
                    return (
                        <ProductItem product={product} key={product.id} />
                        )
                    }
                )}
            </div>
        </section>
    )
};

export default ProductsGrid;