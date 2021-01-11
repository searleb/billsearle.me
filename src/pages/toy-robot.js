import Code from '../components/Code';
import TableTopRobot from '../components/TableTopRobot';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import { meta } from '../page-config';

const ToyRobot = () => (
  <Layout>
    <PageHead meta={meta.toyRobot} />
    <main style={{ width: 500 }}>
      <h1>Table Top Robot</h1>
      <TableTopRobot />
      <Code>
        {`// Commands
place(x,y, north|south|east|west)
move()
left()
right()
report()`}
      </Code>
    </main>
  </Layout>
);

export default ToyRobot;
