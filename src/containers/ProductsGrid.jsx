import React, { useEffect, useState, useContext } from 'react';
import ProductItem from '@components/ProductItem';
import ProductDetail from '@containers/ProductDetail';
import styles from '@styles/containers/ProductsGrid.module.scss';
import useFetch from '@hooks/useFetch';
import endPoints from 'services/api';
import AppContext from '@context/AppContext';

const ProductsGrid = () => {
    const [API, setAPI] = useState(endPoints.products.getAllProducts); //configuración de endpoints
    const { data: products } = useFetch(API ? API : endPoints.products.getAllProducts);
    const [listaProducts, setLista] = useState([]);

    //HANDLE CATEGORY FILTER
    const { categoryFilter } = useContext(AppContext);
    const [categoryName, setCategoryName]= useState("All Products")
    const [noFoundProducts, setnoFoundProducts] = useState(false);
    const FetchByCategory = async (id) => {
        await setAPI(endPoints.categories.getCategoriesProduct(id));
        if (!listaProducts.length > 0) {
            setnoFoundProducts(true);
        } else {
            setnoFoundProducts(false);
        }
    };
    const FetchAllProducts = async () => {
        await setAPI(endPoints.products.getAllProducts);
        setnoFoundProducts(false);
    };
    useEffect(() => {
        if (products) {
            setLista(products);
        }
        switch (categoryFilter) {
            case 'all':
                FetchAllProducts();
                setCategoryName("All Products")
                break;
            case 1:
                FetchByCategory(1);
                setCategoryName("Clothes")
                break;
            case 2:
                FetchByCategory(2);
                setCategoryName("Electronics")
                break;
            case 3:
                FetchByCategory(3);
                setCategoryName("Furniture")
                break;
            case 4:
                FetchByCategory(4);
                setCategoryName("Shoes")
                break;
            case 5:
                FetchByCategory(5);
                setCategoryName("Others")
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, categoryFilter, listaProducts]);

    //ProductDetailToggle
    const [detailToggle, setDetailToggle] = useState(false);

    //Esta es la función que se crea para abrir y cerrar el modal de ProductDatail
    const handleDetailToggle = (action) => {
        action === 'open' ? setDetailToggle(true) : setDetailToggle(false);
    };

    return (
        <section className={styles['main-container']}>
            <h2 className={styles['category-name']}>{categoryName}</h2>
            <div className={styles['cards-container']}>
                {listaProducts.map((product) => {
                    return (
                        <ProductItem
                            handleDetailToggle={handleDetailToggle}
                            product={product}
                            key={product.id}
                        />
                    );
                })}
            </div>
            {noFoundProducts && (
                <div className={styles['no-products-found']}>
                    <h2> There are no products in this Category</h2>
                </div>
            )}
            {
                detailToggle && <ProductDetail handleDetailToggle={handleDetailToggle} /> //aparece y desaparece el Product Detail Component
            }
        </section>
    );
};

export default ProductsGrid;
