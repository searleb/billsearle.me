import Link from 'next/link';
import PropTypes from 'prop-types';

const ProjectList = ({ projects }) => (
  <ul>
    {projects.map(project => (
      <li>
        {project.link.includes('http' || 'www')
          ? <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
          : (
            <Link href={project.link}>
              <a>{project.title}</a>
            </Link>
          )}
      </li>
    ))}
  </ul>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })).isRequired,
};

export default ProjectList;
