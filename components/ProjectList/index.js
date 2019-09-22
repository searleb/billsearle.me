import Link from 'next/link';
import PropTypes from 'prop-types';

const anchorClasses = 'text-3xl';

const ProjectList = ({ projects, title }) => (
  <>
    <h2>{title}</h2>
    <div className="border-b my-4" />
    <ul className="mb-6">
      {projects.map(project => (
        <li>
          {project.link.includes('http' || 'www')
            ? <a className={anchorClasses} href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
            : (
              <Link href={project.link}>
                <a className={anchorClasses}>{project.title}</a>
              </Link>
            )}
        </li>
      ))}
    </ul>
  </>
);

ProjectList.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })).isRequired,
};

export default ProjectList;
