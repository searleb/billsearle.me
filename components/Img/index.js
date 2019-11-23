import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Img = ({ src, alt, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const imgVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
  };

  return (
    <motion.img
      {...rest}
      src={src}
      alt={alt}
      initial="initial"
      animate={loaded ? 'in' : 'initial'}
      variants={imgVariants}
      onLoad={() => setLoaded(true)}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Img;
