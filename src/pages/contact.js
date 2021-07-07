import Layout from '../components/Layout';
import Link from '../components/Link';
import PageHead from '../components/PageHead';
import { meta } from '../page-config';

const Contact = () => (
  <Layout>
    <PageHead meta={meta.contact} />
    <h1>Contact</h1>
    <p>
      If you&apos;d like to work together,{' '}
      <Link
        underline
        href="https://www.linkedin.com/in/billsearle"
        text="please get in touch."
      />
    </p>
    <p>
      You can also find me on {' '}
      <Link
        underline
        href="https://github.com/searleb"
        text="Github."
      />
    </p>
  </Layout>
);

export default Contact;
