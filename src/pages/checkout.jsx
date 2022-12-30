import React, { useContext } from 'react';
import Head from 'next/head';
import OrderItemCheckout from '@components/OrderItemCheckout';
import AppContext from '@context/AppContext';
import styles from '@styles/pages/Checkout.module.scss';

const Checkout = () => {
  const {state}= useContext(AppContext)
  
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <section className={styles.checkout}>
        <div className={styles['checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['checkout-content']}>
            <p>
              <span>04.25.2022</span>
              <span>6 artículos</span>
            </p>
            <p>$560.00</p>
          </div>
          {
            state.cart.map((product)=> {
              console.log(product);
              return(
              <OrderItemCheckout product={product} />
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Checkout;
