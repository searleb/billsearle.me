import PropTypes from 'prop-types';
import Head from 'next/head';
import config from '../../pages/config.json';

const Page = ({ children }) => (
  <>
    <Head>
      <title>Bill Searle - Front End Web Developer</title>
      <meta
        name="description"
        content={`Bill is a front end developer, currently freelancing for ${config.employment.current.title}`}
      />
    </Head>
    <div className="container max-w-3xl my-16 md:my-20 lg:my-32 px-6 md:pr-24">
      {children}
    </div>
  </>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
