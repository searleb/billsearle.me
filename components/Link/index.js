import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Strike from '../Strike';
import ColourContext from '../../context/colour';
import './styles.css';

const ExternalLink = ({
  href, text, strike, className,
}) => {
  const { colour } = useContext(ColourContext);
  const [hoverColour, setHoverColour] = useState('#black');
  return (
    <>
      <Strike strike={strike}>
        <a
          className={className}
          style={{ color: hoverColour }}
          onMouseEnter={() => {
            setHoverColour(colour);
          }}
          onMouseLeave={() => {
            setHoverColour('black');
          }}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </Strike>
      {' '}
    </>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  strike: PropTypes.bool,
};

ExternalLink.defaultProps = {
  strike: false,
};

export default ExternalLink;
