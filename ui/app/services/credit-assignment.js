import Service, { inject as service } from '@ember/service';
import { resolve } from 'rsvp';

export const stubCreditAssignment = Service.extend({
  mockTinyData(mock) {
    this.set('tinyData', mock);
  },
  searchCredits() {
    const credits = this.tinyData.get('credit').slice(0, 2);
    return resolve({
      data: credits,
    });
  },
});

export function endpointFor(creditable, creditAssignment) {
  if (creditAssignment && creditAssignment.id) {
    return ['PUT', `/api/credit-assignments/${creditAssignment.id}`];
  }

  const {
    type,
    id,
  } = creditable;

  switch (type) {
    case 'enrollment':
    case 'contract':
      return ['POST', `/api/${type}s/${id}/credit-assignments`];
    case 'student':
    case 'user':
      return ['POST', `/api/students/${id}/credit-assignments`];
    default:
      throw new Error(`Unknown creditable type ${type}`);
  }
}

export default Service.extend({
  tinyData: service(),
  flashMessages: service(),

  /* Perform a search for credits.
   * @param {Object} options | search options
   * @param {string} options.status | credit status - default is 'active', pass 'all' to see all
   * @param {number} options.limit | limit
   * @param {string} options.order | order string; default is 'name'
   * @param {string} options.search | search string
   * @returns {Promise} fetch promise
   */
  searchCredits({
    status = 'active',
    limit = 10,
    order = 'courseName',
    search = null,
  }) {
    const { tinyData } = this;
    return tinyData.fetch('/api/credits', {
      data: {
        status,
        limit,
        order,
        search,
      },
    });
  },

  /* Save the credit assignment, linking it to the passed creditable.
   * @param {Object} creditable | entity to connect the credit assignment to
   * @param {Object} creditAssignment | Credit assignment model
   * @returns {Promise} fetch promise
   */
  saveCreditAssignment(creditable, creditAssignmentModel) {
    const { tinyData } = this;
    const [method, url] = endpointFor(creditable, creditAssignmentModel);
    return tinyData.fetch(url, {
      method,
      data: {
        data: creditAssignmentModel,
      },
    });
  },
});
