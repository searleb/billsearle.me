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
  external: PropTypes.bool,
};

const A = ({
  hoverColour, setHoverColour, text, colour, ...rest
}) => (
  <a
    {...rest}
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
  href, text, strike, className, external,
}) => {
  const { colour } = useContext(ColourContext);
  const [hoverColour, setHoverColour] = useState('#black');
  return (
    <>
      <Strike strike={strike}>
        {external
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
  external: false,
};

export default Link;
