import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import EnrollmentRelations from '../../mixins/enrollment-relations';

export default Component.extend(EnrollmentRelations, {
  tinyData: service(),
  tagName: 'tbody',

  notes: computed('notablesHash', 'enrollment', function () {
    const { notablesHash, enrollment } = this;

    if (!(notablesHash && enrollment)) return null;

    return notablesHash[enrollment.id];
  }),
});
