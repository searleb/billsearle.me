import classNames from "classnames";
import { ColorContext } from "context/color";
import NextLink from "next/link";
import { useContext, useState } from "react";

import Strike from "../Strike";

const defaultTextColor = "currentColor";

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
  const { color } = useContext(ColorContext);
  const [hoverColor, setHoverColor] = useState(defaultTextColor);
  const sharedProps = {
    className: classNames(className, { underline: underline }),
    href,
    text,
    underline,
    onMouseEnter: () => {
      setHoverColor(color);
    },
    onMouseLeave: () => {
      setHoverColor(defaultTextColor);
    },
    style: { color: hoverColor },
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
