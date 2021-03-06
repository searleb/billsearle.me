import PropTypes from 'prop-types';

import Divider from '../Divider';
import ProjectLink from '../ProjectLink';

const ProjectList = ({ projects, title }) => (
  <section>
    <h2 className="font-semibold">{title}</h2>
    <Divider />
    <ul className="mb-16">
      {projects.map(project => (
        <li key={project.title} className="mb-8">
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
