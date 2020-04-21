import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  usersWithLogin: computed('logins', function () {
    return this.logins
      .filter(login => login.attributes.identities.length > 0)
      .reduce((memo, login) => {
        memo[login.attributes.email] = login;
        return memo;
      }, {});
  }),
});
