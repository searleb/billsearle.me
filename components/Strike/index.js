import PropTypes from 'prop-types';

const Strike = ({ children, strike }) => (
  strike ? <s>{children}</s> : children
);

Strike.propTypes = {
  children: PropTypes.node.isRequired,
  strike: PropTypes.bool,
};

Strike.defaultProps = {
  strike: true,
};

export default Strike;
