import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <div className="container max-w-3xl my-16 md:my-20 lg:my-32 px-6">
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
