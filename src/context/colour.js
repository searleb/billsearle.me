import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import colourClock from 'scripts/colour-clock';

const ColourContext = createContext();

const ColourProvider = ({ children }) => {
  const [state, setState] = useState({ colour: '#ffffff', time: '' });

  useEffect(() => {
    let interval;

    const startColourClock = () => {
      setState({ ...colourClock() });
      interval = setInterval(() => {
        setState({ ...colourClock() });
      }, 1000);
    };

    startColourClock();

    return () => clearInterval(interval);
  }, []);

  return <ColourContext.Provider value={{ ...state }}>{children}</ColourContext.Provider>;
};

ColourProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ColourContext, ColourProvider };
