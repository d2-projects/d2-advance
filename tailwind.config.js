'use strict';

module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        d2sky: {
          light: '#3884fe',
          DEFAULT: '#2f74ff',
          dark: '#1049bb'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
