import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({
  tinyData: service(),
  tagName: 'li',

  didReceiveAttrs() {
    if (this.credit) return;

    const { creditAssignment } = this;
    const creditId = get(creditAssignment, 'relationships.credit.data.id');

    if (!creditId) {
      return;
    }

    const credit = this.tinyData.get('credit', creditId);

    this.set('credit', credit);
  },
});
