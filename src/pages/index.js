import React from 'react';
import { projects, employment, meta } from '../page-config';
import ProjectList from '../components/ProjectList';
import Link from '../components/Link';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';
import Strike from '../components/Strike';

const Home = () => (
  <Layout>
    <PageHead meta={meta.home} />
    <section className="mb-16">
      <h1>Hello,</h1>
      <p className="text-3xl sm:text-4xl leading-snug">
        I&apos;m a front end web developer, currently <Strike>studying</Strike> <Strike>employed</Strike> freelancing in <Strike>New York</Strike> <Strike>Sydney</Strike> Whistler for{' '}
        {employment.past.map(e => (
          <Link key={e.title} href={e.link} text={e.title} strike />
        ))}
        <Link href={employment.current.link} text={employment.current.title} />
      </p>
    </section>
    <ProjectList title="Professional" projects={projects.professional} />
    <ProjectList title="Personal" projects={projects.personal} />
  </Layout>
);
export default Home;
