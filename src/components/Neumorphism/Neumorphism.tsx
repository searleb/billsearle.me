import cn from "classnames";
import { useState } from "react";
import theme from "tailwindcss/colors";

interface NeuBaseProps {
  circle?: boolean;
  color: string;
}

const NeuBase = ({ circle = false, color }: NeuBaseProps) => (
  <button
    type="button"
    className={cn(
      "neu h-40 w-40 text-black flex justify-center items-center m-6",
      {
        "rounded-lg": !circle,
        "rounded-full": circle,
        [`shadow-neu-${color}`]: color,
      }
    )}
  >
    {color}
  </button>
);

export const Neumorphism = () => {
  const [removeBackground, setRemoveBackground] = useState(false);

  const {
    transparent,
    black,
    white,
    current,
    inherit,
    lightBlue,
    warmGray,
    trueGray,
    coolGray,
    blueGray,
    ...rest
  } = theme;

  return (
    <>
      <button
        type="button"
        className="p-2 text-lg font-semibold border-l-2 border-gray-500 border-solid"
        onClick={() => setRemoveBackground(!removeBackground)}
      >
        Remove Backgrounds
      </button>
      {Object.keys(rest).map((color) => (
        <div
          key={color}
          className={cn(
            "flex flex-wrap w-full h-full justify-center items-center p-8 shadow-inner my-4 transition-colors duration-200",
            {
              [`bg-${color}-300`]: !removeBackground,
              "bg-transparent": removeBackground,
            }
          )}
        >
          <NeuBase color={color} />
          <NeuBase color={color} circle />
        </div>
      ))}
    </>
  );
};
