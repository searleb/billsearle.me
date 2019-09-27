import PropTypes from 'prop-types';
import Link from '../Link';

const anchorClasses = 'text-4xl leading-none';

const ProjectLink = ({
  href, text, tech,
}) => (
  <>
    <Link className={anchorClasses} href={href} text={text} />
    <span className="opacity-50 text-xs italic block">{tech}</span>
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
