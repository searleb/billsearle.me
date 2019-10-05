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
            I've worked on everything from marketing sites to
            realtime trading platforms to streaming audio apps.
         `}
        </p>

        <p>
          I have worked professionally as a developer since 2014
          after making a career change from tech support by completing
          over 500 hours of classroom tuition from General Assembly
          and immersing myself in the industry through freelance, agency and corporate roles.
        </p>

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
              <ul className="list-inside list-disc">
                {item.gigs.map(gig => (
                  <li key={gig.title}>{gig.title} <small>- {gig.location}</small></li>
                ))}
              </ul>
              )}
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
