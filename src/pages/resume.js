import Layout from '../components/Layout';
import { resume, meta } from '../page-config';
import Link from '../components/Link';
import yearDiff from '../scripts/year-diff';
import PageHead from '../components/PageHead';

const Resume = () => {
  const { education, work } = resume;
  return (
    <Layout>
      <PageHead meta={meta.resume} />
      <section id="resume">
        <h1>Resume / CV</h1>
        <h3>Summary</h3>
        <p>
          {`
            Senior Front-End Web Developer with ${yearDiff()}+ years experience
            working across a wide range of projects and industries.
            Has worked on everything from marketing sites to realtime trading platforms to
            multi-language international sites to streaming audio apps.
         `}
        </p>
        <p>Comfortable in fast paced agency environments, corporate settings or fully remote.</p>
        <p>
          Specializing in React.js development and related technologies,
          including Next.js, Redux, Webpack and extensive API integration.
        </p>

        <h3>Work Experience</h3>
        <ul>
          {work.map(item => (
            <li className="mb-8" key={`${item.date}${item.title}`}>
              <p>
                {item.date}
                <br />
                {item.title} <small>- {item.location}</small>
              </p>
              {item.gigs && (
                <ul className="text-xl font-normal list-disc list-inside">
                  {item.gigs.map(gig => (
                    <li key={gig.title}>{gig.title} <small>- {gig.location}</small></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <h3>Education</h3>
        <ul>
          {education.map(item => (
            <li className="mb-8" key={`${item.date}${item.title}`}>
              <p>
                {item.date} {item.school} <small>- {item.location}</small>
                <br />
                {item.title}
              </p>
            </li>
          ))}
        </ul>

        <Link
          className="text-2xl"
          href="https://docs.google.com/document/d/1ugtZ9-HNzOBHEnM5lrMCVPztLnxqFPr2Ae4fYsAXndI/edit?usp=sharing"
          text="See complete resume here."
        />
      </section>
    </Layout>
  );
};

export default Resume;
