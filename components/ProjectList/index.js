import PropTypes from 'prop-types';
import ProjectLink from '../ProjectLink';
import './styles.css';

const ProjectList = ({ projects, title }) => (
  <section>
    <h2>{title}</h2>
    <div className="border-b my-4" />
    <ul className="mb-16 animate-project-list">
      {projects.map((project, i) => (
        <li key={project.title} className="mb-8" style={{ animationDelay: `0.${i}s` }}>
          <ProjectLink
            href={project.link}
            text={project.title}
            tech={project.tech}
          />
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
