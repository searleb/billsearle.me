import { useContext, useEffect } from 'react';
import colourContext from '../../context/colour';

const ColourBar = () => {
  const { time, colour } = useContext(colourContext);
  const sharedClasses = 'transition-colors duration-700 z-10 fixed';

  useEffect(() => {
    const favico = document.querySelector('#favico');
    favico.href = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='%23${colour.slice(1)}'/%3E%3C/svg%3E`;
  }, [colour]);

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
