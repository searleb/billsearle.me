import PropTypes from 'prop-types';
import cn from 'classnames';
import theme from 'tailwindcss/defaultTheme';

const NeuBase = ({ circle, color }) => (
  <button className={cn(
    'neu h-40 w-40 text-black flex justify-center items-center m-6', {
    'rounded-lg': !circle,
    'rounded-full': circle,
    [`shadow-neu-${color}`]: color
  })}
  >
    {color}
  </button>
);

const Neumorphism = () => (
    Object.keys(theme.colors).slice(3).map(color => (
      <div 
        key={color} 
        className={`flex flex-wrap w-full h-full justify-center items-center p-8 shadow-inner my-4 bg-${color}-300`}
      >
        <NeuBase color={color} />
        <NeuBase color={color} circle />
      </div>
    ))
);

NeuBase.propTypes = {
  circle: PropTypes.bool,
  color: PropTypes.string.isRequired,
};

NeuBase.defaultProps = {
  circle: false,
};

export default Neumorphism;
