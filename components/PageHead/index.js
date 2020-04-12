import PropTypes from 'prop-types';
import Head from 'next/head';

const PageHead = ({ meta }) => (
  <Head>
    <title>{meta.title}</title>
    <meta name="description" content={meta.desc} />
    <meta name="author" content="Bill Searle" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={meta.desc} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:img" content="https://billsearle.me/favicon.ico" />
    <meta property="og:url" content={`https://billsearle.me${meta.url}`} />
  </Head>
);

PageHead.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageHead;
