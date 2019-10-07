/* eslint-disable global-require */
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
};
