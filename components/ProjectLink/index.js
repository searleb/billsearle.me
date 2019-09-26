import PropTypes from 'prop-types';
import Link from '../Link';

const anchorClasses = 'text-4xl leading-none';

const ProjectLink = ({
  external, href, text, tech,
}) => (
  <>
    <Link external={external} className={anchorClasses} href={href} text={text} />
    <span className="opacity-50 text-xs italic block">{tech}</span>
  </>
);

ProjectLink.propTypes = {
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tech: PropTypes.string,
};

ProjectLink.defaultProps = {
  external: false,
  tech: '',
};

export default ProjectLink;
