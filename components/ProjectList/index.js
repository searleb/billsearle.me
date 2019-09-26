import PropTypes from 'prop-types';
import Link from '../Link';

const anchorClasses = 'text-4xl';

const ProjectList = ({ projects, title }) => (
  <section>
    <h2>{title}</h2>
    <div className="border-b my-4" />
    <ul className="mb-16">
      {projects.map(project => (
        <li key={project.title} className="mb-1">
          {project.link.includes('http' || 'www')
            ? <Link external className={anchorClasses} href={project.link} text={project.title} />
            : <Link href={project.link} className={anchorClasses} text={project.title} />}
        </li>
      ))}
    </ul>
  </section>
);

ProjectList.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })).isRequired,
};

export default ProjectList;
