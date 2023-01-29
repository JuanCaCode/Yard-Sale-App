import React, { useContext } from 'react';
import AppLayout from '@layouts/AppLayout';
import Head from 'next/head';
import OrderItemCheckout from '@components/OrderItemCheckout';
import AppContext from '@context/AppContext';
import styles from '@styles/pages/Checkout.module.scss';

const Checkout = () => {
  const { state } = useContext(AppContext)
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum
  }
  const date = new Date();

  return (
    <AppLayout>
      <Head>
        <title>Checkout</title>
      </Head>
      <section className={styles.checkout}>
        <div className={styles['checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['checkout-content']}>
            <p>
              <span>{date.toDateString('default', { month: 'long' })}</span>
              <span>{state.cart.length} artículos</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          {
            state.cart?.map((product) => {
              return (
                <OrderItemCheckout product={product} key={product.id} />
              )
            })
          }
        </div>
      </section>
    </AppLayout>
  );
};

export default Checkout;
