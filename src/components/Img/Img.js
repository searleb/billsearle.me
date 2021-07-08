import cn from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Img = ({
  src, alt, className, height, width, ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      {...rest}
      unsized={!height || !width}
      width={width}
      height={height}
      src={src}
      alt={alt}
      quality={80}
      className={cn(className, 'transition-opacity duration-300', {
        'opacity-0': !loaded,
        'opacity-100': loaded,
      })}
      onLoad={() => setLoaded(true)}
    />
  );
};

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
