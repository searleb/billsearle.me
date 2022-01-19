import Img from '../components/Img';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { meta } from '../page-config';

const Bero = () => <Layout>
  <PageHead meta={meta.bero} />
  <article>
    <h1 className="mb-6">Bero</h1>
    <p>
      Bero has been a mini passion project first started in 2014.
      <br />
      Over the years I've rebuilt it multiple times to varying degrees when exploring new web technologies.
    </p>
    <p>
      The basic idea is that it directs the user to a location "as the crow flies"
      using a compass pointing to your location instead of North.
    </p>
    <p>
      The latest incarnation was built with React Native and deployed to the App Store. It used Google Maps and Places API along with local storage to keep list of favoured addresses.
    </p>
    <p>
      The original version had Firebase integration and a friends mechanism to allow you find your friends as well as fixed addresses. It also grew "hotter" the closer you were to your destination.
    </p>
    <figure className="mb-16">
      <Img
        src="/bero/bero-2-iphone-shadowless.png"
        alt="Bero screenshot on an iPhone"
        width={501}
        height={920}
      />
      <figcaption>Latest version built with React Native running on an iPhone. 2019.</figcaption>
    </figure>

    <figure className="mb-16">
      <Img
        src="/bero/bero-hike-v.jpg"
        alt="Bero in the wild in Vancouver"
        width={1024}
        height={768}
      />
      <figcaption>First version with React Native running on an iPhone. 2019</figcaption>
    </figure>

    <figure className="max-w-md mb-16">
      <Img
        src="/bero/bero-ionic.jpeg"
        alt="Bero screenshot in Sydney"
        width={1241}
        height={2208}
      />
      <figcaption>Ionic version running on an iPhone. 2016</figcaption>
    </figure>

    <figure>
      <Img
        src="/bero/bero-v1-phones.jpg"
        alt="Bero screenshots on 3 iPhone 4's"
        width={2000}
        height={2000}
      />
      <figcaption>First version built with Ruby on Rails and jQuery. 2014</figcaption>
    </figure>
  </article>
</Layout>;

export default Bero;
