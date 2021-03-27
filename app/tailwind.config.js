const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

module.exports = {
  plugins: [
    forms,
    typography,
  ],
  purge: {
    content: ['./src/**/*.{vue,js}'],
    options: {
      safelist: [
        'type', // [type="text"], etc.
      ],
    },
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-fast': 'spin 500ms linear infinite',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
      textColor: ['disabled'],
    },
  },
};
