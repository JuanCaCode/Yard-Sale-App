import React, {useContext} from 'react'
import AppContext from '@context/AppContext';
import iconcart from '@icons/bt_add_to_cart.svg'
import '@styles/components/ProductItem.scss'

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
        <article className="product-card">
            <figure className='product-card-img' onClick={()=>handleProductDetail(product)}>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <div className="product-card-info">
                <div className="details-container">
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={()=>handleClick(product)}>
                    <img src={iconcart} alt="botón de añadir a carrito de compras" />
                </figure>
            </div>
        </article>
    )
}

export default ProductItem;