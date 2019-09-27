import { useState, useContext } from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import Strike from '../Strike';
import ColourContext from '../../context/colour';
import './styles.css';

const propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  strike: PropTypes.bool,
  className: PropTypes.string,
};

const A = ({
  hoverColour, setHoverColour, text, colour, className, underline, ...rest
}) => (
  <a
    {...rest}
    className={`${underline ? 'underline' : ''} ${className}`}
    style={{ color: hoverColour }}
    onMouseEnter={() => {
      setHoverColour(colour);
    }}
    onMouseLeave={() => {
      setHoverColour('#1a202c');
    }}
  >
    {text}
  </a>
);

A.propTypes = {
  ...propTypes,
};

const Link = ({
  href, text, strike, className, underline,
}) => {
  const { colour } = useContext(ColourContext);
  const [hoverColour, setHoverColour] = useState('#black');
  return (
    <>
      <Strike strike={strike}>
        {href.includes('http' || 'www')
          ? (
            <A
              className={className}
              colour={colour}
              hoverColour={hoverColour}
              href={href}
              rel="noopener noreferrer"
              setHoverColour={setHoverColour}
              target="_blank"
              text={text}
              underline={underline}
            />
          )
          : (
            <NextLink href={href} passHref>
              <A
                className={className}
                colour={colour}
                hoverColour={hoverColour}
                setHoverColour={setHoverColour}
                text={text}
                underline={underline}
              />
            </NextLink>
          )}
      </Strike>
      {' '}
    </>
  );
};

Link.propTypes = {
  ...propTypes,
};

Link.defaultProps = {
  strike: false,
  className: '',
};

export default Link;
