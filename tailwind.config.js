const neu = require('./components/Neumorphism/tailwind.neu.plugin');

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
      boxShadow: theme => ({
        // 'neu-gray': `
        //   -9px -9px 16px 0px ${theme('colors.gray.100')},
        //   -1px -1px 1px ${theme('colors.gray.100')},
        //   9px 9px 16px ${theme('colors.gray.500')}`,
        // 'neu-gray-inner': `
        //   inset -9px -9px 16px 0px ${theme('colors.gray.100')},
        //   inset -1px -1px 1px ${theme('colors.gray.100')},
        //   inset 9px 9px 16px ${theme('colors.gray.500')}`,
        // 'neu-orange': `
        //   -9px -9px 16px ${theme('colors.orange.200')},
        //   -1px -1px 1px ${theme('colors.orange.100')},
        //   9px 9px 16px ${theme('colors.orange.500')}`,
        // 'neu-orange-inner': `
        //   inset -9px -9px 16px ${theme('colors.orange.200')},
        //   inset -1px -1px 1px ${theme('colors.orange.100')},
        //   inset 9px 9px 16px ${theme('colors.orange.500')}`,
        // 'neu-indigo': `
        //   -9px -9px 16px ${theme('colors.indigo.200')},
        //   -1px -1px 1px ${theme('colors.indigo.100')},
        //   9px 9px 16px ${theme('colors.indigo.500')}`,
        // 'neu-indigo-inner': `
        //   inset -9px -9px 16px ${theme('colors.indigo.200')},
        //   inset -1px -1px 1px ${theme('colors.indigo.100')},
        //   inset 9px 9px 16px ${theme('colors.indigo.500')}`,
        // 'neu-red': `
        //   -9px -9px 16px ${theme('colors.red.200')},
        //   -1px -1px 1px ${theme('colors.red.100')},
        //   9px 9px 16px ${theme('colors.red.500')}`,
        // 'neu-red-inner': `
        //   inset -9px -9px 16px ${theme('colors.red.200')},
        //   inset -1px -1px 1px ${theme('colors.red.100')},
        //   inset 9px 9px 16px ${theme('colors.red.500')}`
        // ,
      }),
    },
  },
  plugins: [neu()],
};
