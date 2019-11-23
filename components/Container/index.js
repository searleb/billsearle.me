import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Container = ({ children }) => (
  <div className="container
    max-w-4xl
    px-8
    my-12
    md:my-20
    ml-0
    lg:ml-20
    xl:ml-40"
  >
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
