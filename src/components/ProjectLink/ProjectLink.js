import PropTypes from 'prop-types';

import Link from '../Link';

const ProjectLink = ({
  href, text, tech,
}) => (
  <>
    <Link className="text-4xl leading-none font-semibold" href={href} text={text} />
    <span className="opacity-50 text-sm italic block">{tech}</span>
  </>
);

ProjectLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tech: PropTypes.string,
};

ProjectLink.defaultProps = {
  tech: '',
};

export default ProjectLink;
