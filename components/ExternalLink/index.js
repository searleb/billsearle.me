import PropTypes from 'prop-types';
import Strike from '../Strike';

const ExternalLink = ({ href, text, strike }) => (
  <>
    <Strike strike={strike}>
      <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
    </Strike>
    {' '}
  </>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  strike: PropTypes.bool,
};

ExternalLink.defaultProps = {
  strike: false,
};

export default ExternalLink;
