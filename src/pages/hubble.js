import Img from '../components/Img';
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
          <Img src="/hubble/home.png" alt="Hubble Home" width={832} height={650} />
        </li>
        <li>
          Browse and filter profiles with multiple options.
          <Img src="/hubble/browse.png" alt="Hubble Browse" width={832} height={650} />
          <Img src="/hubble/filter.png" alt="Hubble Filter" width={832} height={650} />
        </li>
        <li>
          View Profile - tabbed view for more info.<br />
          Everything is editable inline depending on user permission,
          including photo/video/audio uploads.
          <Img src="/hubble/profile.png" alt="Hubble Profile" width={832} height={650} />
        </li>
        <li>
          View past and current profile assessments.
          <Img src="/hubble/assess.png" alt="Hubble Assessment" width={832} height={650} />
        </li>
        <li>
          Perform assessments.
          <Img src="/hubble/assess-final.png" alt="Hubble Assessment Finalise" width={832} height={650} />
        </li>
        <li>
          Site administration.
          <Img src="/hubble/admin.png" alt="Hubble Admin" width={832} height={650} />
        </li>
      </ul>
      <small className="text-xs opacity-50"><em>*All data shown in app is mock data.</em></small>
    </article>
  </Layout>
);

export default Hubble;
