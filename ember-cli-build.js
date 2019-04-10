'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          { module: postcssImport },
          { module: postcssPresetEnv },
          { module: postcssNested },
        ],
      },
    },
    nodeAssets: {
      pikaday: {
        vendor: ['css/pikaday.css'],
      },
    },
  });

  app.import('vendor/pikaday/css/pikaday.css');

  return app.toTree();
};
