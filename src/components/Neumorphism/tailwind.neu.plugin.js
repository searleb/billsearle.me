const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = () => ({ theme, addComponents }) => {
  const neu = {
    '.neu': {
      position: 'relative',
      boxShadow: 'inset 0 0 0 0 transparent',
      transitionProperty: 'box-shadow',
      transitionDuration: '100ms',
      '&::after': {
        content: "''",
        display: 'block',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        borderRadius: 'inherit',
        transitionProperty: 'inherit',
        transitionDuration: 'inherit',
      },
      '&:hover::after, &:focus::after': {
        boxShadow: '0 0 0 0 transparent !important',
      }
    }
  };
  const { colors } = defaultTheme;
  const {
    transparent, black, white, current, ...rest
  } = colors;

  Object.keys(rest).forEach(color => {
    neu[`.shadow-neu-${color}`] = {
      '&:hover, &:focus': {
        boxShadow: `
          inset -9px -9px 16px 0px ${theme(`colors.${color}.200`)},
          inset -1px -1px 1px ${theme(`colors.${color}.100`)},
          inset 9px 9px 16px ${theme(`colors.${color}.500`)}
        `,
        outline: 'none',
      },
      '&::after': {
        boxShadow: `
        -9px -9px 16px 0px ${theme(`colors.${color}.100`)},
        -1px -1px 1px ${theme(`colors.${color}.100`)},
        9px 9px 16px ${theme(`colors.${color}.500`)}
        `
      }
    };
  });
  addComponents(neu);
};
