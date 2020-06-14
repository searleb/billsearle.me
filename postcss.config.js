// Next uses a string bases config: https://nextjs.org/docs/advanced-features/customizing-postcss-config

module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-nested',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    ...(process.env.NODE_ENV === 'production' ? [
      [
        'cssnano',
        {
          preset: 'default',
        },
      ],
    ] : []),
  ],
};
