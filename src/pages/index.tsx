import ProductsGrid from '@containers/ProductsGrid';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Yard Sale Con Next.js</title>
      </Head>
      <ProductsGrid />
    </>
  );
}
