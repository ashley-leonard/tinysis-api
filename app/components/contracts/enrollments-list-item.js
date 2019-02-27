import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tinyData: service(),
  tagName: 'tbody',

  creditAssignments: computed('enrollment', function () {
    const { enrollment, tinyData } = this;
    return enrollment
      .relationships
      .creditAssignments
      .data
      .map(creditAssignment => tinyData.get('creditAssignment', creditAssignment.id));
  }),

  participant: computed('enrollment', function () {
    const { enrollment, tinyData } = this;

    return tinyData.get('user', enrollment.relationships.participant.data.id);
  }),

  notes: computed('notablesHash', 'enrollment', function () {
    const { notablesHash, enrollment } = this;

    if (!(notablesHash && enrollment)) return null;

    return notablesHash[enrollment.id];
  }),

  enrollmentStatus: computed('enrollment', function () {
    return this.enrollment.attributes.enrollmentStatus;
  }),
});
