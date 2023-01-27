import React , {useState} from 'react';
import ProductItem from '@components/ProductItem';
import ProductDetail from '@containers/ProductDetail';
import styles from '@styles/containers/ProductsGrid.module.scss';
import useFetch from '@hooks/useFetch';
import endPoints from 'services/api';

const ProductsGrid = () => {
    const {data:products} = useFetch(endPoints.products.getAllProducts);

    //ProductDetailToggle
    const [detailToggle, setDetailToggle] = useState(false);

    //Esta es la función que se crea para abrir y cerrar el modal de ProductDatail  
    const handleDetailToggle = (action)=>{
        action === 'open'? setDetailToggle(true): setDetailToggle(false)
    };

    return (
        <section className={styles["main-container"]}>
            <div className={styles["cards-container"]}>
                {products.map(product =>{ //Se mapea todos los productos uno a uno y por cada uno se crea un componente de Product Item
                    return (
                        <ProductItem 
                            handleDetailToggle={handleDetailToggle} //Envía la función para desplegar el modal de product detail
                            product={product} // envía el objeto del producto en especifico
                            key={product.id}  //envía el id del producto en especifico
                        />
                        )
                    }
                )}  
            </div>
            {
            detailToggle && <ProductDetail handleDetailToggle={handleDetailToggle} /> //aparece y desaparece el Product Detail Component
            }
        </section>
    )
};

export default ProductsGrid;