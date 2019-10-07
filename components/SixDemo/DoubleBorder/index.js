import PropTypes from 'prop-types';

const Layer = ({ ...rest }) => (
  <div {...rest} className="p-6 transition-bg" />
);

const DoubleBorder = ({ theme }) => (
  <div className="px-2 py-4 w-full">
    <div>
      <Layer style={{
        transform: 'translate(0px, 0px)',
        background: theme.primary,
      }}
      />
      <Layer style={{
        transform: 'translate(1rem, -2rem)',
        background: theme.secondary,
      }}
      />
      <Layer style={{
        transform: 'translate(2rem, -4rem)',
        background: theme.tertiary,
      }}
      />
    </div>
  </div>
);

DoubleBorder.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    tertiary: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoubleBorder;
