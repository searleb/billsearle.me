import PropTypes from 'prop-types';

const Strike = ({ children, strike }) => (
  strike ? <span className="line-through opacity-60">{children}</span> : children
);

Strike.propTypes = {
  children: PropTypes.node.isRequired,
  strike: PropTypes.bool,
};

Strike.defaultProps = {
  strike: true,
};

export default Strike;
