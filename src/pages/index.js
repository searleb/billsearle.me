import { useContext } from 'react';
import { projects, employment, meta } from '../page-config';
import ProjectList from '../components/ProjectList';
import Link from '../components/Link';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import Strike from '../components/Strike';
import colourContext from '../context/colour';

const Home = () => {
  const { time } = useContext(colourContext);
  const hour = Number(time.slice(0, 2));
  let greeting = '';
  if (hour <= 5) {
    greeting = 'Hey, you\'re up late';
  } else if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour <= 17) {
    greeting = 'Good afternoon';
  } else if (hour <= 24) {
    greeting = 'Good evening';
  }

  const {
    current, past, situation, location,
  } = employment;
  return (
    <Layout>
      <PageHead meta={meta.home} />
      <section className="mb-16">
        <h1 className="mb-6 leading-none fade-greeting">{greeting}.</h1>
        <p className="text-2xl leading-snug sm:text-4xl">
          I&apos;m a front end web developer, currently{' '}
          {situation.map(s => (
            <>
              <Strike key={s.status} strike={s.strike}>{s.status}</Strike>
              {' '}
            </>
          )) }
          {' '}in{' '}
          {location.map(l => (
            <>
              <Strike key={l.name} strike={l.strike}>{l.name}</Strike>
              {' '}
            </>
          ))}
          with{' '}
          {past.map(e => (
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
