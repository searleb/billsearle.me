import { ColourContext } from "context/colour";
import { Fragment, useContext } from "react";

import Layout from "../components/Layout";
import { Link } from "../components/Link";
import PageHead from "../components/PageHead";
import ProjectList from "../components/ProjectList";
import Strike from "../components/Strike";
import { employment, meta, projects } from "../page-config";

const Home = () => {
  const { time, colour } = useContext(ColourContext);
  const hour = Number(time.slice(0, 2));
  let greeting = "";
  if (hour <= 5) {
    greeting = "Hey, you're up late";
  } else if (hour < 12) {
    greeting = "Good morning";
  } else if (hour <= 17) {
    greeting = "Good afternoon";
  } else if (hour <= 24) {
    greeting = "Good evening";
  }

  const { current, past, situation, location } = employment;
  return (
    <Layout>
      <PageHead meta={meta.home} />
      <section className="mb-16">
        <h1 className="mb-6 leading-none fade-greeting">
          {greeting}
          <span style={{ color: colour }}>.</span>
        </h1>
        <p className="text-2xl leading-snug sm:text-4xl">
          I&apos;m a front end web developer, currently{" "}
          {situation.map((s) => (
            <Fragment key={s.status}>
              <Strike strike={s.strike}>{s.status}</Strike>{" "}
            </Fragment>
          ))}{" "}
          in{" "}
          {location.map((l) => (
            <Fragment key={l.name}>
              <Strike strike={l.strike}>{l.name}</Strike>{" "}
            </Fragment>
          ))}
          with{" "}
          {past.map((e) => (
            <Link key={e.title} href={e.link} text={e.title} strike />
          ))}
          <Link href={current.link} text={`${current.title}.`} />
        </p>
      </section>
      <ProjectList title="Professional" projects={projects.professional} />
      <ProjectList title="Personal" projects={projects.personal} />
    </Layout>
  );
};

export default Home;
