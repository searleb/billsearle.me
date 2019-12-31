module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-css-modules',
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen',
        'media',
        'import',
        'extend',
      ],
    }],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
