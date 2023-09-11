import Code from "components/Code";
import Layout from "components/Layout";
import { Link } from "components/Link";
import PageHead from "components/PageHead";
import TableTopRobot from "components/TableTopRobot";
import { meta } from "page-config";

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

    <Link
      underline
      href="https://github.com/searleb/billsearle.me/tree/master/src/components/TableTopRobot"
      text="GitHub Code Here"
      className="text-xl"
    />
  </Layout>
);

export default ToyRobot;
