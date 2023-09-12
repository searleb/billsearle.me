import { createContext, ReactNode, useEffect, useState } from "react";
import colorClock from "scripts/color-clock";

const ColorContext = createContext<{ color: string; time: string }>({
  color: "",
  time: "",
});

const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({ color: "#ffffff", time: "" });

  useEffect(() => {
    let interval;

    const startColorClock = () => {
      setState({ ...colorClock() });
      interval = setInterval(() => {
        setState({ ...colorClock() });
      }, 1000);
    };

    startColorClock();

    return () => clearInterval(interval);
  }, []);

  return (
    <ColorContext.Provider value={{ ...state }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
