import PropTypes from 'prop-types';
import Container from '../Container';

const Page = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
