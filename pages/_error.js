import Layout from '../components/Layout';
import Link from '../components/Link';
import PageHead from '../components/PageHead';
import { meta } from '../page-config';

const Error = () => (
  <>
    <PageHead meta={meta.error} />
    <Layout>
     404 | <Link text="Take me home" href="/" />
    </Layout>
  </>
);

export default Error;
