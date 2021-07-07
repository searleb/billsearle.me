import Img from '../components/Img';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { meta } from '../page-config';

const Bero = () => <Layout>
  <PageHead meta={meta.bero} />
  <article className="flex flex-col items-center text-center">
    <h1 className="mb-6">
      Bero
      <small className="block text-2xl opacity-50">The easier way.</small>
    </h1>

    {/* <p>Bero is the easiest, most direct navigator.</p> */}

    <figure>
      <Img src="/bero/bero-2-iphone-shadowless.png" alt="Bero on an iPhone" />
      <a href="https://itunes.apple.com/au/app/bero/id1458255218" target="_blank" rel="noopener noreferrer">
        <Img src="/bero/app-store-black.svg" className="inline-block" />
      </a>
    </figure>
  </article>
</Layout>;

export default Bero;
