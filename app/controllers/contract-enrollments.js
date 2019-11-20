import Controller from '@ember/controller';
import fetch from '../utils/fetch';

export default Controller.extend({
  actions: {
    async searchUsers(name) {
      const results = await fetch('/api/students', {
        params: {
          name,
          status: 'active',
          limit: 10,
          order: 'lastName,firstName',
        },
      });

      return results.data.map(user => ({ name: `${user.attributes.lastName}, ${user.attributes.firstName}`, value: user.id }));
    },
    selectUser(/* userToSelect */) {
      // NYI
    },
  },
});
