import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { replaceModel } from '../utils/json-api';
import { STATUS_CLOSED } from '../utils/contract-utils';

export default Controller.extend({
  tinyData: service(),
  user: service(),

  contractIsDisabled: computed('contract', function () {
    const { contract } = this;

    if (contract.attributes.status === STATUS_CLOSED) {
      return true;
    }

    return !this.user.canEdit(contract);
  }),

  actions: {
    showAddEnrollment(show = true) {
      this.set('showAddEnrollment', show);
    },

    addEnrollment(/* enrollment */) {
      throw new Error('todo');
    },

    async updateEnrollment(enrollment, command) {
      const response = await this.tinyData.fetch(`/api/enrollments/${enrollment.id}/${command}`, {
        method: 'PATCH',
      });

      this.set('enrollments', replaceModel(this.enrollments, response.data));
    },

    async deleteEnrollment(enrollment) {
      await this.tinyData.fetch(`/api/enrollments/${enrollment.id}`, {
        method: 'DELETE',
      });

      this.set('enrollments', this.enrollments.filter(e => e.id !== enrollment.id));
    },
  },
});
