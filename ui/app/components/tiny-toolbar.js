import Component from '@ember/component';
import { computed } from '@ember/object';
import { ROLE_ADMIN } from '../utils/user-utils';

export default Component.extend({
  tagName: '',
  signIn: () => {},
  signOut: () => {},

  userIsAdmin: computed('user', function () {
    const { user } = this;

    if (!user) return false;

    return user.attributes.role === ROLE_ADMIN;
  }),

  actions: {
    signIn() {
      this.signIn();
    },
    signOut() {
      this.signOut();
    },
  },
});
