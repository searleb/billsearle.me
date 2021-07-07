import Image from 'next/image';
import PropTypes from 'prop-types';

const Img = ({
  src, alt, className, height, width, ...rest
}) => (
  <Image
    {...rest}
    src={src}
    alt={alt}
    placeholder="blur"
  />
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

Img.defaultProps = {
  className: undefined,
  height: undefined,
  width: undefined,
};

export default Img;
