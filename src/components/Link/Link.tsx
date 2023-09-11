import classNames from "classnames";
import { ColourContext } from "context/colour";
import NextLink from "next/link";
import { useContext, useState } from "react";

import Strike from "../Strike";

const defaultTextColour = "currentColor";

interface LinkProps {
  href: string;
  text: string;
  strike?: boolean;
  className?: string;
  underline?: boolean;
}

export const Link = ({
  href,
  text,
  strike = false,
  className,
  underline,
}: LinkProps) => {
  const { colour } = useContext(ColourContext);
  const [hoverColour, setHoverColour] = useState(defaultTextColour);
  const sharedProps = {
    className: classNames(className, { underline: underline }),
    href,
    text,
    underline,
    onMouseEnter: () => {
      setHoverColour(colour);
    },
    onMouseLeave: () => {
      setHoverColour(defaultTextColour);
    },
    style: { color: hoverColour },
  };

  return (
    <>
      <Strike strike={strike}>
        {href.startsWith("http") || href.startsWith("www") ? (
          <a {...sharedProps} rel="noopener noreferrer" target="_blank">
            {text}
          </a>
        ) : (
          <NextLink {...sharedProps}>{text}</NextLink>
        )}
      </Strike>{" "}
    </>
  );
};

export default Link;
