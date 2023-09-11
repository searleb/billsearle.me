import classNames from "classnames";
import { ColorContext } from "context/color";
import { useContext } from "react";

interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => {
  const { color } = useContext(ColorContext);
  return (
    <div
      className={classNames(
        "border-b-2 transition-colors duration-700 my-4",
        className
      )}
      style={{ borderBottomColor: color }}
    />
  );
};
