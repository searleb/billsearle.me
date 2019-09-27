import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="container
    max-w-3xl
    px-8
    my-12
    md:my-20
    ml-0
    lg:ml-20
    xl:ml-40"
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
