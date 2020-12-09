'use strict';

module.exports = {
  '*.{js,jsx,vue,ts,tsx}': (filenames) =>
    `vue-cli-service lint ${filenames.join(' ')}`
};
