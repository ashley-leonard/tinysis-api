import Service, { inject as service } from '@ember/service';
import clone from '../utils/clone';

export default Service.extend({
  tinyData: service(),

  setUser(user) {
    this._data = {
      user,
    };
  },

  getUser() {
    return clone(this._data.user);
  },

  canEdit(object) {
    return !!object;
  },

  /* Perform a search for users.
   * @param {Object} options | search options
   * @param {string} options.status | credit status - default is 'active', pass 'all' to see all
   * @param {number} options.limit | limit
   * @param {string} options.order | order string; default is 'name'
   * @param {string} options.search | search string
   * @returns {Promise} fetch promise
   */
  searchUsers({
    status = 'active',
    limit = 10,
    order = 'lastName, firstName',
    role = 'student',
    search = null,
  }) {
    const { tinyData } = this;
    return tinyData.fetch('/api/users', {
      data: {
        search,
        status,
        limit,
        order,
        role,
      },
    });
  },
});
