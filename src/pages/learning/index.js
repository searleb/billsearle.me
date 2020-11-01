import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import Link from 'components/Link';
import fs from 'fs';

const Learning = ({ posts }) => (
  <Layout>
    <h1>Learning</h1>
    <ul className="list-disc list-inside">
      {posts.map(post => (
        <li key={post} className="capitalize">
          <Link href={`/learning/${post}`} text={post.replace(/-/g, ' ')} />
        </li>
      ))}
    </ul>
  </Layout>
);

Learning.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const getStaticProps = async () => {
  const posts = fs
    .readdirSync('./src/pages/learning', { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);

  return {
    props: {
      posts,
    },
  };
};

export default Learning;
