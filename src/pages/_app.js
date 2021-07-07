import 'styles/main.css';

import ColourBar from 'components/ColourBar';
import Favico from 'components/Favico';
import Navigation from 'components/Navigation';
import { ColourProvider } from 'context/colour';
import Head from 'next/head';
import Script from 'next/script';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link key="favico" rel="icon" sizes="any" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=UA-44359005-1"
            />
            <Script
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-44359005-1');
                `,
              }}
            />
          </>
        )}
      </Head>
      <ColourProvider>
        <Favico />
        <ColourBar />
        <Navigation />
        <Component {...pageProps} />
      </ColourProvider>
    </>
  );
}
