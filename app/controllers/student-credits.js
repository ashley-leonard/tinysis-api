import Controller from '@ember/controller';
import dayjs from 'dayjs';
import { inject as service } from '@ember/service';
import { replaceModel } from '../utils/json-api';

export default Controller.extend({
  tinyData: service(),
  actions: {
    updateSelectedCredits(creditAssignments) {
      this.set('selectedCredits', creditAssignments);
    },
    async combineCredits(combineModel) {
      const { student } = this;
      const url = `/api/students/${student.id}/credit-assignments`;

      const newCreditAssignment = await this.tinyData.fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          data: combineModel,
        }),
      });

      const { creditAssignments } = this;
      const combined = combineModel.relationships.childCreditAssignments.data.map(ca => ca.id);
      const newCreditAssignmentsList = creditAssignments
        .filter(ca => !combined.contains(ca.id))
        .concat([newCreditAssignment]);

      this.setProperties({
        creditAssignments: newCreditAssignmentsList,
        showCombineDialog: false,
      });
    },
    async splitCredit(creditAssignment) {
      const url = `/api/credit-assignments/${creditAssignment.id}`;

      const releasedCreditAssignments = await this.tinyData.fetch(url, {
        method: 'DELETE',
      });

      const { creditAssignments } = this;
      const toExclude = [creditAssignment, ...releasedCreditAssignments.data];
      const newCreditAssignmentsList = creditAssignments
        .filter(ca => !toExclude.find(ex => ex.id === ca.id))
        .concat(releasedCreditAssignments.data);

      this.setProperties({
        creditAssignments: newCreditAssignmentsList,
      });
    },
    hideCombine() {
      this.set('showCombineDialog', false);
    },
    async showCombine(creditsToCombine) {
      if (!this.terms) {
        const terms = await this.tinyData.fetch('/api/terms?status=active');
        this.terms = terms.data;
      }

      this.setProperties({
        creditsToCombine,
        showCombineDialog: true,
        terms: this.terms,
      });
    },
    async approveCredit(creditAssignment) {
      const { student } = this;
      const isApproved = Boolean(creditAssignment.attributes.districtFinalizeApprovedOn);
      const districtFinalizeApprovedOn = dayjs().format('YYYY-MM-DD');
      let url;

      if (isApproved) {
        url = `/api/students/${student.id}/credit-assignments/${creditAssignment.id}/unapprove`;
      } else {
        url = `/api/students/${student.id}/credit-assignments/${creditAssignment.id}/approve`;
      }

      const newCreditAssignment = await this.tinyData.fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          data: {
            attributes: {
              districtFinalizeApprovedOn,
            },
          },
        }),
      });

      const { creditAssignments } = this;
      this.set('creditAssignments', replaceModel(creditAssignments, newCreditAssignment.data));

      return newCreditAssignment;
    },
  },
});
