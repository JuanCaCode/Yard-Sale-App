import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" {...{ crossOrigin: 'anonymous' }} />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet" />
        <meta charSet="UTF-8" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <body className="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
