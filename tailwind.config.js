/* eslint-disable global-require */
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
    },
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
};
