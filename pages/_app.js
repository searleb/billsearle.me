/* eslint-disable react/no-danger */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import ColourBar from '../components/ColourBar';
import ColourContext from '../context/colour';
import Navigation from '../components/Navigation';
import Favico from '../components/Favico';
import colourClock from '../scripts/colour-clock';
import '../styles/main.css';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      colour: '#fff',
      time: '',
    };
  }

  componentDidMount() {
    this.startColourClock();
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  startColourClock() {
    this.setState({ ...colourClock() });
    const interval = setInterval(() => {
      this.setState({ ...colourClock() });
    }, 1000);
    this.setState({ interval });
  }

  render() {
    const { colour, time } = this.state;
    const { Component, pageProps, router } = this.props;

    return (
      <>
      <Head>
          <link key="favico" rel="icon" sizes="any" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='%23aab4cc'/%3E%3C/svg%3E"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/site.webmanifest" />
          {process.env.NODE_ENV === 'production' &&
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-44359005-1" />
              <script dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-44359005-1');
                `,
              }}
              />
            </>
          }
        </Head>
      <ColourContext.Provider value={{ colour, time }}>
        <Favico />
        <ColourBar />
        <Navigation />
        <Component {...pageProps} key={router.route} />
      </ColourContext.Provider>
      </>
    );
  }
}

export default MyApp;
