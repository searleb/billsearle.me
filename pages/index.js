import React from 'react';
import config from './config.json';
import ProjectList from '../components/ProjectList';
import Link from '../components/Link';
import Layout from '../components/Layout';
import '../styles/main.css';

const Home = () => {
  const { projects, employment } = config;
  return (
    <Layout>
      <section className="mb-16">
        <h1>Hello,</h1>
        <p className="text-2xl sm:text-3xl md:text-4xl leading-snug">
          I&apos;m a front end web developer, currently <s>studying</s> <s>employed</s> freelancing in <s>New York</s> <s>Sydney</s> Whistler for{' '}
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
};
export default Home;
