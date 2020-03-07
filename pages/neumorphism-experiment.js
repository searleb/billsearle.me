import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import Neumorphism from '../components/Neumorphism';
import { meta } from '../page-config';

const NeumorphismPage = () => (
  <Layout>
    <PageHead meta={meta.neu} />
    <article>
      <h1>Neumorphism Experiment</h1>
      <p>
        I&apos;ve been seeing a lot of &quot;Neumorphism&quot; designs appearing lately,
        so I thought I&apos;d have a go at it implementing it using the tailwind color palette.
      </p>
      <p>
        Tailwind lends itself to this quite nicely as it provides
        a good range across each color set.
      </p>
      <Neumorphism />
    </article>
  </Layout>
);


export default NeumorphismPage;
