import Link from '../components/Link';
import Layout from '../components/Layout';
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
        href="https://www.linkedin.com/in/billsearle/detail/contact-info/"
        text="please get in touch."
      />
    </p>
  </Layout>
);

export default Contact;
