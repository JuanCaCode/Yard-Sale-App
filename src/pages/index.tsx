import AppLayout from '@layouts/AppLayout';
import Head from 'next/head';
import ProductsGrid from '@containers/ProductsGrid';
import LandingSection from '@components/LandingSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yard Sale Store</title>
      </Head>
      <AppLayout>
        <LandingSection/>
        <ProductsGrid />
      </AppLayout>
    </>
  );
}
