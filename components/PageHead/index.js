import PropTypes from 'prop-types';
import Head from 'next/head';

const PageHead = ({ meta }) => (
  <Head>
    <title>{meta.title}</title>
    <meta type="description" content={meta.desc} />
  </Head>
);

PageHead.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageHead;
