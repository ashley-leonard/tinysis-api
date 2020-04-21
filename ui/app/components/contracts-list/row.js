import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tinyData: service(),
  tagName: '',
  facilitator: computed('contract', function () {
    const { tinyData } = this;
    const { facilitator } = this.contract.relationships;

    return tinyData.get('user', facilitator.data.id);
  }),
  category: computed('contract', function () {
    const { tinyData } = this;
    const { category } = this.contract.relationships;
    return tinyData.get('category', category.data.id);
  }),
  term: computed('contract', function () {
    const { tinyData } = this;
    const { term } = this.contract.relationships;
    return tinyData.get('term', term.data.id);
  }),
});
