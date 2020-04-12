import { useContext } from 'react';
import colourContext from '../../context/colour';

const ColourBar = () => {
  const { time, colour } = useContext(colourContext);
  const sharedClasses = 'transition-colors duration-700 z-10 fixed';

  return (
    <>
      <div style={{ backgroundColor: colour }} className={`${sharedClasses} h-4 w-screen inset-x-0 top-0`} />
      <div style={{ backgroundColor: colour }} className={`${sharedClasses} w-4 h-screen inset-y-0 left-0`} />
      <span className="fixed top-0 right-0 text-xs pr-2 z-20 text-black opacity-50 w-32">
        {time} / {colour}
      </span>
    </>
  );
};

export default ColourBar;
