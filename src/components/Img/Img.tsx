import cn from "classnames";
import Image from "next/image";
import { useState } from "react";

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
}

export const Img = ({
  src,
  alt,
  className,
  height,
  width,
  ...rest
}: ImgProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      {...rest}
      width={width}
      height={height}
      src={src}
      alt={alt}
      quality={80}
      className={cn(className, "transition-opacity duration-200", {
        "opacity-0": !loaded,
        "opacity-100": loaded,
      })}
      onLoad={() => setLoaded(true)}
    />
  );
};
