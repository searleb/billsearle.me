import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { meta } from '../page-config';


const Hubble = () => (
  <Layout>
    <PageHead meta={meta.hubble} />
    <article>
      <h1 className="mb-6">
        Hubble Talent
        <small className="block text-2xl opacity-50">Internal SCA Project.</small>
      </h1>
      <p>
        Hubble Talent is an industry first product aimed at finding
        and springboarding the careers of new and up-and-coming talent.
      </p>
      <p>
        I was tasked with building out the internal dashboard on a tight timeline.
        To increase speed of development I elected to use Ant Design React components
        with create-react-app so I was able to focus more on the functionality.
      </p>
      <p>
        There were almost 100 REST endpoints for all the CRUD operations possible on
        the Node backend.
      </p>
      <p className="mb-8">The whole project took about 8 weeks to complete.</p>
      <p>Key features include:</p>

      <ul className="list-disc list-inside">
        <li>
          Authentication - with auto session expiry logout and user permission levels.
          <img src="/static/hubble/home.png" alt="Hubble Home" />
        </li>
        <li>
          Browse and filter profiles with multiple options.
          <img src="/static/hubble/browse.png" alt="Hubble Browse" />
          <img src="/static/hubble/filter.png" alt="Hubble Filter" />
        </li>
        <li>
          View Profile - tabbed view for more info.<br />
          Everything is editabled inline depending on user permission,
          including photo/video/audio uploads.
          <img src="/static/hubble/profile.png" alt="Hubble Profile" />
        </li>
        <li>
          View past and current profile assessments.
          <img src="/static/hubble/assess.png" alt="Hubble Assessment" />
        </li>
        <li>
          Perform assessments.
          <img src="/static/hubble/assess-final.png" alt="Hubble Assessment Finalise" />
        </li>
        <li>
          Site administration.
          <img src="/static/hubble/admin.png" alt="Hubble Admin" />
        </li>
      </ul>
      <small className="opacity-50 text-xs"><em>*All data shown in app is mock data.</em></small>
    </article>
  </Layout>
);

export default Hubble;
