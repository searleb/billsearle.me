import React from 'react';
import Head from 'next/head';
import config from './config.json';
import ProjectList from '../components/ProjectList';
import ExternalLink from '../components/ExternalLink';

const Home = () => {
  const { projects, employment } = config;
  return (
    <>
      <Head>
        <title>Bill Searle - Front End Web Developer</title>
        <meta
          name="description"
          content="Bill is a front end developer, currently freelancing for"
        />
      </Head>
      <section className="welcome-note">
        <h1>Hello,</h1>
        <h2>
          I&apos;m a front end web developer, currently <s>studying employed</s> freelancing in <s>New York Sydney</s> Canada for{' '}
          {employment.past.map(e => <ExternalLink href={e.link} text={e.title} strike />)}
          <ExternalLink href={employment.current.link} text={employment.current.title} />
        </h2>
      </section>
      <h1>Professional</h1>
      <ProjectList projects={projects.professional} />
      <h1>Personal</h1>
      <ProjectList projects={projects.personal} />
    </>
  );
};
export default Home;
