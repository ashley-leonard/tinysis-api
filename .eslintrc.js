/* eslint-disable strict */

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: [
    'ember',
  ],
  extends: [
    'airbnb-base',
    'plugin:ember/recommended',
  ],
  env: {
    browser: true,
  },
  globals: {
    qunit: true,
  },
  rules: {
    'ember/new-module-imports': 1,
    'ember/order-in-components': 1,
    'ember/order-in-controllers': 1,
    'ember/order-in-models': 1,
    'ember/order-in-routes': 1,
    'ember/no-arrow-function-computed-properties': 0,
    'ember/no-new-mixins': 0,

    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],

    // sometimes named imports are handy
    'import/prefer-default-export': 0,

    // haven't figured out how to reconcile these with Ember's module imports
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,

    // ember has lots of anon functions in its computeds,
    // grace here
    'func-names': 0,

    // can leave line length to the developer to sort out
    'max-len': 0,

    // continue statements are not the devil
    'no-continue': 0,

    // allows the convention of a leading underscore for
    // "private" attributes
    'no-underscore-dangle': 0,

    // I generally don't do this but for reduce operations this is just
    // a painful rule
    'no-param-reassign': 0,

    'prefer-destructuring': ['error', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    },
    ],
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
    },
  ],
};
