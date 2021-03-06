import cn from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import theme from 'tailwindcss/defaultTheme';

const NeuBase = ({ circle, color }) => (
  <button
    type="button"
    className={cn(
      'neu h-40 w-40 text-black flex justify-center items-center m-6', {
        'rounded-lg': !circle,
        'rounded-full': circle,
        [`shadow-neu-${color}`]: color,
      },
    )}
  >
    {color}
  </button>
);

const Neumorphism = () => {
  const [removeBackground, setRemoveBackground] = useState(false);
  return (
    <>
      <button
        type="button"
        className="p-2 text-lg font-semibold border-l-2 border-gray-500 border-solid"
        onClick={() => setRemoveBackground(!removeBackground)}
      >
        Remove Backgrounds
      </button>
      {Object.keys(theme.colors).slice(4).map(color => (
        <div
          key={color}
          className={cn('flex flex-wrap w-full h-full justify-center items-center p-8 shadow-inner my-4 transition-colors duration-200', {
            [`bg-${color}-300`]: !removeBackground,
            'bg-transparent': removeBackground,
          })}
        >
          <NeuBase color={color} />
          <NeuBase color={color} circle />
        </div>
      ))}
    </>
  );
};

NeuBase.propTypes = {
  circle: PropTypes.bool,
  color: PropTypes.string.isRequired,
};

NeuBase.defaultProps = {
  circle: false,
};

export default Neumorphism;
