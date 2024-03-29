import "styles/main.css";

import { ColorBar } from "components/ColorBar";
import { Favico } from "components/Favico";
import { Navigation } from "components/Navigation";
import { ColorProvider } from "context/color";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link key="favico" rel="icon" sizes="any" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=UA-44359005-1"
          />
          <Script
            id="gtag"
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
      <ColorProvider>
        <Favico />
        <ColorBar />
        <Navigation />
        <Component {...pageProps} />
      </ColorProvider>
    </>
  );
}
