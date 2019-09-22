import React from 'react';
import config from './config.json';
import ProjectList from '../components/ProjectList';
import ExternalLink from '../components/ExternalLink';
import Layout from '../components/Layout';
import '../styles/main.css';

const Home = () => {
  const { projects, employment } = config;
  return (
    <Layout>
      <section className="mb-16">
        <h1>Hello,</h1>
        <p className="text-4xl leading-snug">
          I&apos;m a front end web developer, currently <s>studying employed</s> freelancing in <s>New York Sydney</s> Whistler for{' '}
          {employment.past.map(e => (
            <ExternalLink key={e.title} href={e.link} text={e.title} strike />
          ))}
          <ExternalLink href={employment.current.link} text={employment.current.title} />
        </p>
      </section>
      <ProjectList title="Professional" projects={projects.professional} />
      <ProjectList title="Personal" projects={projects.personal} />
    </Layout>
  );
};
export default Home;
