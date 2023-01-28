import ProductsGrid from '@containers/ProductsGrid';
import LandingSection from '@components/LandingSection';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Yard Sale Con Next.js</title>
      </Head>
      <LandingSection/>
      <ProductsGrid />
    </>
  );
}
