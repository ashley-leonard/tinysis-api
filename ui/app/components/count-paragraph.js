import Component from '@ember/component';
import { formatNumber } from 'accounting';
import { computed } from '@ember/object';
import { pluralize } from 'ember-inflector';

export default Component.extend({
  tagName: '',

  // not aliased. this can be overwritten by the caller
  // to just supply a specific count.
  count: computed('result.meta.count', function () {
    return this.get('result.meta.count');
  }),

  countName: computed('count', function () {
    const { count } = this;

    if (count === 0) {
      return 'no';
    }

    return formatNumber(count);
  }),

  displayName: computed('count', 'name', 'pluralName', function () {
    const { count, name, pluralName } = this;

    if (count === 0 || count > 1) {
      return pluralName || pluralize(name);
    }

    return name;
  }),
});
