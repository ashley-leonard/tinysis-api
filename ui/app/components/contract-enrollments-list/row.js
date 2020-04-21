import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import EnrollmentRelations from '../../mixins/enrollment-relations';
import {
  ENROLLMENT_STATUS_CLOSED,
  ENROLLMENT_STATUS_FINALIZED,
} from '../../utils/enrollment-utils';

export default Component.extend(EnrollmentRelations, {
  tinyData: service(),
  user: service(),

  tagName: '',

  enrollmentIsDisabled: computed('contractIsDisabled', 'enrollment', function () {
    const {
      contractIsDisabled,
      enrollment,
    } = this;

    if (contractIsDisabled) return true;
    if ([ENROLLMENT_STATUS_CLOSED, ENROLLMENT_STATUS_FINALIZED].includes(enrollment.attributes.status)) {
      return true;
    }

    return !this.user.canEdit(enrollment);
  }),

  notes: computed('notablesHash', 'enrollment', function () {
    const { notablesHash, enrollment } = this;

    if (!(notablesHash && enrollment)) return null;

    return notablesHash[enrollment.id];
  }),

  actions: {
    deleteEnrollment() {
      return this.deleteEnrollment(this.enrollment);
    },
    updateEnrollment(command) {
      return this.updateEnrollment(this.enrollment, command);
    },
  },
});
