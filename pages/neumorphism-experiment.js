import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import Neumorphism from '../components/Neumorphism';
import { meta } from '../page-config';
import Link from '../components/Link';

const NeumorphismPage = () => (
  <Layout>
    <PageHead meta={meta.neu} />
    <article>
      <h1>Neumorphism Experiment</h1>
      <p>
        I&apos;ve been seeing a lot of &quot;Neumorphism&quot; designs appearing lately,
        so I thought I&apos;d have a go at implementing it using the tailwind colour palette.
      </p>
      <p>
        Tailwind lends itself to this quite nicely as it provides
        a good range across each colour set.
      </p>
      <p>
        To produce the hover effect I applied a shadow to the
        ::after element and an inset shadow to main element.
        This is necessary as I discovered you cannot animate to and
        from an inset/regular box shadow, so each is animated separately
        to and from transparent.
      </p>
      <p>
        Each element has 3 shadows made up of shades of the background colour.
        To see this more clearly, you can remove the background below.
      </p>
      <p>
        The tailwind plugin I wrote can be found {' '}
        <Link
          text="on Github."
          underline
          href="https://github.com/searleb/billsearle.me/tree/master/components/Neumorphism"
        />
      </p>
      <Neumorphism />
    </article>
  </Layout>
);


export default NeumorphismPage;
