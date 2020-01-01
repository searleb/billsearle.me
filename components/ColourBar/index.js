import { useContext } from 'react';
import colourContext from '../../context/colour';

const ColourBar = () => {
  const { time, colour } = useContext(colourContext);
  const sharedClasses = 'transition-bg transition-750 z-10 fixed';
  return (
    <>
      <div style={{ backgroundColor: colour }} className={`${sharedClasses} h-4 w-screen inset-x-0 top-0`} />
      <div style={{ backgroundColor: colour }} className={`${sharedClasses} w-4 h-screen inset-y-0 left-0`} />
      <span className="fixed top-0 right-0 text-xs font-light opacity-50 pr-2 text-white z-20">
        {time} / {colour}
      </span>
    </>
  );
};

export default ColourBar;
