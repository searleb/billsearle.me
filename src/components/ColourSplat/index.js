import PropTypes from 'prop-types';

const ColourSplat = ({ secondary }) => (
  <div
    className="w-4 h-4 m-1 rounded-lg"
    style={{
      background: secondary,
    }}
  />
);

ColourSplat.propTypes = {
  secondary: PropTypes.string.isRequired,
};

export default ColourSplat;
