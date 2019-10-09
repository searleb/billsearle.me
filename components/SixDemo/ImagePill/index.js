import PropTypes from 'prop-types';

const ImagePill = ({
  theme, img, text, invert,
}) => (
  <div className="px-2 py-4 w-1/2">
    <div
      className="shadow-xl rounded-xl overflow-hidden transition-bg transition-colors"
      style={{
        background: invert ? theme.secondary : theme.primary,
        color: invert ? theme.primary : theme.secondary,
      }}
    >
      <img
        src={img}
        alt="train"
        className="rounded-b-xl shadow-md"
      />
      <div className="p-4">
        <p className="text-base">
          {text}
        </p>
      </div>
    </div>
  </div>
);

ImagePill.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    tertiary: PropTypes.string.isRequired,
  }).isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  invert: PropTypes.bool,
};

ImagePill.defaultProps = {
  invert: false,
};

export default ImagePill;
