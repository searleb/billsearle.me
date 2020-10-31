import { useContext } from 'react';
import { useRouter } from 'next/router';
import colourContext from '../../context/colour';

const ColourBar = () => {
  const { time, colour } = useContext(colourContext);
  const sharedClasses = 'transition-colors duration-700 z-50 fixed';
  const router = useRouter();
  const hide = router.pathname === '/trivia/[id]';

  return (
    <>
      <div style={{ backgroundColor: colour }} className={`${sharedClasses} h-4 w-screen inset-x-0 top-0`} />
      {!hide && (
        <>
          <div style={{ backgroundColor: colour }} className={`${sharedClasses} w-4 h-screen inset-y-0 left-0`} />
          <span className="fixed top-0 right-0 z-50 w-32 pr-2 text-xs text-black opacity-50">
            {time} / {colour}
          </span>
        </>
      )}
    </>
  );
};

export default ColourBar;
