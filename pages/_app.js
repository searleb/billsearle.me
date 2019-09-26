import React from 'react';
import App from 'next/app';
import ColourBar from '../components/ColourBar';
import ColourContext from '../context/colour';
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
    this.startTimer();
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  startTimer() {
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
        {!pageProps.statusCode && <ColourBar />}
        <Component {...pageProps} /> {/* eslint-disable-line react/jsx-props-no-spreading */}
      </ColourContext.Provider>
    );
  }
}

export default MyApp;
