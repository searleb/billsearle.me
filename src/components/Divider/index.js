import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ColourContext } from 'context/colour';

const Divider = ({ className }) => {
  const { colour } = useContext(ColourContext);
  return (
    <div className={`border-b-2 transition-colors duration-700 my-4 ${className}`} style={{ borderBottomColor: colour }} />
  );
};

Divider.propTypes = {
  className: PropTypes.string,
};

Divider.defaultProps = {
  className: '',
};

export default Divider;
