import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { replaceModel } from '../utils/json-api';
import { getNewCreditAssignmentForCreditable } from '../utils/credit-utils';

export default Component.extend({
  tinyData: service(),
  creditAssignmentService: service('creditAssignment'),
  tagName: '',
  creditAssignmentsList: computed('creditAssignments', function () {
    const { creditAssignments } = this;

    if (!creditAssignments) return [];

    if (Array.isArray(creditAssignments)) {
      return creditAssignments;
    }

    return [creditAssignments];
  }),
  actions: {
    showEdit(editCreditable, creditAssignment) {
      const editCreditAssignment = creditAssignment || getNewCreditAssignmentForCreditable(editCreditable);
      this.setProperties({
        editCreditAssignment,
        editCreditable,
        showDialog: true,
      });
    },
    async searchCredits(search) {
      const results = await this.creditAssignmentService.searchCredits({ search });
      return results
        .data
        .map((credit) => {
          const name = credit.attributes.courseId
            ? `${credit.attributes.courseName} (${credit.attributes.courseId})`
            : credit.attributes.courseName;
          return {
            name,
            value: credit.id,
          };
        });
    },
    async saveCreditAssignment(model) {
      let result;
      try {
        result = await this.creditAssignmentService.saveCreditAssignment(this.creditable, model);
        this.setProperties({
          saveCreditAssignmentError: null,
          showDialog: false,
          creditAssignments: replaceModel(this.creditAssignments, this.tinyData.get('creditAssignment', result.data.id)),
        });
      } catch (e) {
        this.set('saveCreditAssignmentError', e);
      }
    },
  },
});
