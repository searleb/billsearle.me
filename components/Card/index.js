import PropTypes from 'prop-types';

const Card = ({ theme, children }) => (
  <div className="px-2 py-4 w-full sm:w-1/2">
    <div
      style={{ background: theme.primary, color: theme.secondary }}
      className="shadow-xl rounded-xl p-8 transition-bg transition-color"
    >
      {children}
    </div>
  </div>
);

Card.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    tertiary: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
