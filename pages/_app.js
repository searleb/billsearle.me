import React from 'react';
import App from 'next/app';
import ColourBar from '../components/ColourBar';
import ColourContext from '../context/colour';
import Navigation from '../components/Navigation';
import colourClock from '../scripts/colour-clock';

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
        <ColourBar />
        <Navigation />
        <Component {...pageProps} /> {/* eslint-disable-line react/jsx-props-no-spreading */}
      </ColourContext.Provider>
    );
  }
}

export default MyApp;
