import PropTypes from 'prop-types';
import { useContext } from 'react';
import colourContext from '../../context/colour';

const Divider = ({ className }) => {
  const { colour } = useContext(colourContext);
  return (
    <div className={`border-b-2 transition-border transition-750 my-4 ${className}`} style={{ borderBottomColor: colour }} />
  );
};

Divider.propTypes = {
  className: PropTypes.string,
};

Divider.defaultProps = {
  className: '',
};

export default Divider;
