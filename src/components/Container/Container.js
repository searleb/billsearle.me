import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="container max-w-4xl px-8 my-12 ml-0 md:my-16 lg:ml-20 xl:ml-40">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
