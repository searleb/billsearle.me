/* eslint-disable global-require */
module.exports = {
  theme: {
    screens: {
      'dark-mode': { raw: '(prefers-color-scheme: dark)' },
    },
    extend: {
      borderRadius: {
        xl: '1.5rem',
      },
      colors: {
        'dark-mode': '#151515',
      },
    },
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
};
