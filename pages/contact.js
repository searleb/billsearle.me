import Link from '../components/Link';
import Layout from '../components/Layout';

const Contact = () => (
  <Layout>
    <h1>Contact</h1>
    <p>
      If you&apos;d like to work together, please get in touch{' '}
      <Link
        underline
        href="https://www.linkedin.com/in/billsearle/detail/contact-info/"
        text="here."
      />
    </p>
  </Layout>
);

export default Contact;
