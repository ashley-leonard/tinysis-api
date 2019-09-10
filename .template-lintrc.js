'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'table-groups': false,

    // this seems to preclude drag/drop events on dom elements
    // which does not make sense to me. it's also a pain for A without an href.
    'no-invalid-interactive': false,
  },
};
