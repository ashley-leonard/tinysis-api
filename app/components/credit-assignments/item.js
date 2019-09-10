import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, computed } from '@ember/object';

export default Component.extend({
  tinyData: service(),
  tagName: '',

  courseName: computed('credit.attributes.courseName', 'creditAssignment.attributes.creditCourseName', function () {
    return this.get('credit.attributes.courseName')
      || this.get('creditAssignment.attributes.creditCourseName')
      || this.get('creditAssignment.attributes.contractName');
  }),

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
