import React from 'react';
import Header from '../components/header';
import ProductsGrid from '../containers/ProductsGrid';
import Layout from '../containers/Layout';

const Home = () => {
    return (
        <Layout>
            <Header />
            <ProductsGrid />
        </Layout>
    )
}

export default Home;