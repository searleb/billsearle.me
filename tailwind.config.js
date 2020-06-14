const neu = require('./src/components/Neumorphism/tailwind.neu.plugin');

module.exports = {
  purge: {
    content: [
      './src/pages/**/*.js',
      './src/components/**/*.js',
    ],
    options: {
      css: [
        './src/components/**/*.css',
        './src/styles/**/*.css',
      ],
      whitelist: ['body', 'html'],
      whitelistPatterns: [/shadow-neu-/, /bg-/],
    },
  },
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
