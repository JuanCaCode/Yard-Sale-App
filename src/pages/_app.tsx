import '@styles/global.scss';
import type { AppProps } from 'next/app'
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  {...{ crossorigin: 'anonymous' }}/>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <Component {...pageProps} />
    </AppContext.Provider>
  )
}
