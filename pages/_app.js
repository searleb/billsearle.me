import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import ColourBar from '../components/ColourBar';
import ColourContext from '../context/colour';
import Navigation from '../components/Navigation';
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
    this.colourClock();
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  colourClock() {
    this.setState({ ...colourClock() });
    const interval = setInterval(() => {
      this.setState({ ...colourClock() });
    }, 1000);
    this.setState({ interval });
  }

  render() {
    const { colour, time } = this.state;
    const { Component, pageProps } = this.props;

    return (
      <ColourContext.Provider value={{ colour, time }}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
        </Head>
        <ColourBar />
        <Navigation />
        <Component {...pageProps} /> {/* eslint-disable-line react/jsx-props-no-spreading */}
      </ColourContext.Provider>
    );
  }
}

export default MyApp;
