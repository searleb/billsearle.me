import { ColourContext } from 'context/colour';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { forwardRef, useContext, useState } from 'react';

import Strike from '../Strike';

const propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  strike: PropTypes.bool,
  className: PropTypes.string,
};

const defaultTextColour = 'currentColor';

const A = forwardRef(({
  hoverColour, setHoverColour, text, colour, className, underline, href, ...rest
}, ref) => (
  <a
    {...rest}
    ref={ref}
    href={href}
    className={`${underline ? 'underline' : ''} ${className}`}
    style={{ color: hoverColour }}
    onMouseEnter={() => {
      setHoverColour(colour);
    }}
    onMouseLeave={() => {
      setHoverColour(defaultTextColour);
    }}
  >
    {text}
  </a>
));

A.displayName = 'Anchor'

A.propTypes = {
  ...propTypes,
};

const Link = ({
  href, text, strike, className, underline,
}) => {
  const { colour } = useContext(ColourContext);
  const [hoverColour, setHoverColour] = useState(defaultTextColour);
  const sharedProps = {
    className,
    colour,
    hoverColour,
    setHoverColour,
    text,
    underline,
  };
  return (
    <>
      <Strike strike={strike}>
        {href.startsWith('http') || href.startsWith('www')
          ? <A {...sharedProps} href={href} rel="noopener noreferrer" target="_blank" />
          : (
            <NextLink href={href} passHref>
              <A {...sharedProps} />
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
