import { useContext } from 'react';
import colourContext from '../../context/colour';

const ColourBar = () => {
  const { time, colour } = useContext(colourContext);
  return (
    <>
      <div style={{ backgroundColor: colour }} className="h-4 w-screen fixed inset-x-0 top-0 transition-bg transition-750" />
      <div style={{ backgroundColor: colour }} className="w-4 h-screen fixed inset-y-0 left-0 transition-bg transition-750" />
      <span className="fixed top-0 right-0 text-xs font-light opacity-50 pr-2 text-white">
        {time} / {colour}
      </span>
    </>
  );
};

export default ColourBar;
