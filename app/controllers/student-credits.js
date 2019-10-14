import Controller from '@ember/controller';
import dayjs from 'dayjs';
import { inject as service } from '@ember/service';
import { replaceModel } from '../utils/json-api';

export default Controller.extend({
  tinyData: service(),
  actions: {
    combineCredits(creditAssignments) {
      console.log('send combineCredits', creditAssignments);
    },
    splitCredit(creditAssignment) {
      console.log('send splitCredit', creditAssignment);
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
