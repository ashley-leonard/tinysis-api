import Controller from '@ember/controller';
import dayjs from 'dayjs';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { resolve } from 'rsvp';
import { replaceModel } from '../utils/json-api';

export default Controller.extend({
  tinyData: service(),
  actions: {
    updateSelectedCredits(creditAssignments) {
      this.set('selectedCredits', creditAssignments);
    },
    combineCredits(combineModel) {
      console.log('send combineCredits', combineModel);
      return resolve();
    },
    splitCredit(creditAssignment) {
      console.log('send splitCredit', creditAssignment);
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
      const isApproved = Boolean(creditAssignment.attributes.districtFinalizeApprovedOn);
      const districtFinalizeApprovedOn = dayjs().format('YYYY-MM-DD');
      let url;

      if (isApproved) {
        url = `/api/credit-assignments/${creditAssignment.id}/unapprove`;
      } else {
        url = `/api/credit-assignments/${creditAssignment.id}/approve`;
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
