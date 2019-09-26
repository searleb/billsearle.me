import Layout from '../components/Layout';
import Link from '../components/Link';

export default () => (
  <Layout>
    <article>
      <h1 className="mb-6">
        Bero
        <small className="block text-2xl opacity-50">Never a wrong turn.</small>
      </h1>

      <p>Bero is the easiest, most direct navigator.</p>
      <p>
        Pick a location anywhere in the world and Bero will direct you as the crow flys,
        so you&apos;ll never hear <em>&quot;redirecting&quot;</em> ever again!
      </p>

      <p>
        <Link
          external
          href="https://itunes.apple.com/au/app/bero/id1458255218"
          text="You can download it free on iOS, here."
        />
      </p>

      <figure className="my-10">
        <img src="/static/bero-hike-v.jpg" alt="Bero on a hike" />
        <small><em>Bero keeping us on track in North Vancouver.</em></small>
      </figure>

      <div className="flex">
        <img className="flex-1 w-1 mr-6" src="/static/bero-native-line.png" alt="Bero React Native Screenshot" />
        <img className="flex-1 w-1" src="/static/bero-native.png" alt="Bero React Native Screenshot" />
      </div>
    </article>
  </Layout>
);
