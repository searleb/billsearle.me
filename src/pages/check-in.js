import Img from '../components/Img';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { meta } from '../page-config';

const CheckIn = () => (
  <Layout>
    <PageHead meta={meta.checkin} />
    <article>
      <h1 className="mb-6">
        Check In
        <small className="block text-2xl opacity-50">Internal Mentally Friendly Project.</small>
      </h1>
      <p>
        At Mentally Friendly we believe that regular check-ins
        with our clients is key to a successful project.
      </p>
      <p>
        By holding twice weekly catch ups we are able to response quickly to any blockers,
        questions or changes that may arise.
        <br />
        It also keeps everyone involved up-to-date on the progression.
      </p>
      <p>
        To help faciliate this process and track progress we decided to build a check-in app.
      </p>
      <p className="mt-8">
        I used create-react-app and styled-components to build a Progressive Web App
        for the check-in app and Ant Design for the dashboard.
      </p>

      <h3>App</h3>
      <ul className="list-disc list-inside mb-8">
        <li>
          Local Storage to autofill name field after first use.
        </li>
        <li>
          Auto generated URL per-project.
        </li>
        <li>
          Downloadable to mobile device home screen.
        </li>
        <li>
          MF staff login via Google with project search page.
        </li>
        <li>
          MF staff only rendered fields.
        </li>
      </ul>
      <Img src="/checkin/checkin-full.png" alt="Checkin App" className="sm:w-1/2 mb-8" />

      <h3>Dashboard</h3>
      <ul className="list-disc list-inside mb-8">
        <li>
          Company email restricted Google login.
        </li>
        <li>
          Collates all the check in app data into a scrollable set of colunms,
          selectable by sprint.
        </li>
        <li>
          Displays and scores each checkins info.
        </li>
        <li>
          Flags if anyone reported a blocker.
        </li>
        <li>
          I implemented Googles machine learning sentiment analysis to
          colour code the notes icons, this gave a quick view on whether the notes
          were negative, neutral or positive.
        </li>
      </ul>
      <Img src="/checkin/dashboard.png" alt="Checkin Dsshboard" className="mb-8" />
      <small className="opacity-50 text-xs"><em>*Screenshots are built in code, not just designs.</em></small>
    </article>
  </Layout>
);

export default CheckIn;
