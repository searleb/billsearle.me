module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-nested',
    'autoprefixer',
    ...process.env.NODE_ENV === 'production' ? [
      ['@fullhuman/postcss-purgecss', {
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
        whitelistPatterns: [/shadow-neu-/, /bg-/],
        // Include any special characters you're using in this regular expression
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
      ],
      ['cssnano', {
        preset: 'default',
      },
      ]] : [],
  ],
};
