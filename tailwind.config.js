const neu = require('./components/Neumorphism/tailwind.neu.plugin');

module.exports = {
  theme: {
    extend: {
      screens: {
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
      },
      borderRadius: {
        xl: '1.5rem',
      },
      colors: {
        'dark-mode': '#282B2F',
      },
      opacity: {
        60: '.6',
      },
    },
  },
  plugins: [neu()],
};
