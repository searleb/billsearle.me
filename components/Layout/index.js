import PropTypes from 'prop-types';
import Head from 'next/head';
import config from '../../pages/config.json';
import Container from '../Container';

const Page = ({ children }) => (
  <>
    <Head>
      <title>Bill Searle - Front End Web Developer</title>
      <meta
        name="description"
        content={`Bill is a front end developer, currently freelancing for ${config.employment.current.title}`}
      />
    </Head>
    <Container>
      {children}
    </Container>
  </>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
