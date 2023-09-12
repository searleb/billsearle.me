import { useEffect, useState } from "react";

const HappyBirthday = () => {
  const [darkMode, setDarkMode] = useState(false);
  const isDarkMode = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    setDarkMode(isDarkMode());
  }, []);

  return (
    <div className="fixed overflow-hidden">
      <div
        className="absolute w-screen h-screen opacity-0 prick"
        style={{
          backgroundImage: `url(${
            darkMode ? "/birthday.png" : "/birthday-light.png"
          })`,
        }}
      />
      <div className="flex items-center justify-center w-screen h-screen text-left">
        <div className="z-10">
          <h1 className="absolute text-pink-600">Happy Birthday!</h1>
          <h1 className="text-pink-400 animate-ping">Happy Birthday!</h1>
        </div>
      </div>
    </div>
  );
};

export default HappyBirthday;
