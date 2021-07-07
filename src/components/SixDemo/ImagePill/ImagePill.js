import cn from 'classnames';
import PropTypes from 'prop-types';

import Img from '../../Img';

const ImagePill = ({
  theme, img, text, invert, className,
}) => (
  <div className={cn(className, 'px-2 py-4')}>
    <div
      className="overflow-hidden transition-colors duration-300 shadow-xl rounded-xl"
      style={{
        background: invert ? theme.secondary : theme.primary,
        color: invert ? theme.primary : theme.secondary,
      }}
    >
      <Img
        src={img}
        width={270}
        height={202}
        alt="train"
        className="shadow-md rounded-b-xl"
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
  className: PropTypes.string,
};

ImagePill.defaultProps = {
  invert: false,
  className: undefined,
};

export default ImagePill;
