/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './pages/**/*.js',
    './components/**/*.js',
  ],
  css: [
    './components/**/*.css',
    './styles/**/*.css',
  ],
  whitelist: ['body', 'html'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const cssnano = require('cssnano')({
  preset: 'default',
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [
      purgecss,
      cssnano,
    ] : [],
  ],
};
