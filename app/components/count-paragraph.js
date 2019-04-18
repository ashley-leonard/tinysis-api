import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { pluralize } from 'ember-inflector';

export default Component.extend({
  tagName: '',

  count: alias('result.meta.count'),

  countName: computed('count', function () {
    const { count } = this;

    if (count === 0) {
      return 'no';
    }

    return count;
  }),

  displayName: computed('count', 'name', 'pluralName', function () {
    const { count, name, pluralName } = this;

    if (count === 0 || count > 1) {
      return pluralName || pluralize(name);
    }

    return name;
  }),
});
