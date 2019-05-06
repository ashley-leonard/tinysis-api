import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { ROLE_ADMIN } from '../utils/user-utils';

export default Component.extend({
  tinyData: service(),
  tagName: '',
  userIsAdmin: computed('user', function () {
    const { user } = this;

    if (!user) return false;

    return user.attributes.role === ROLE_ADMIN;
  }),
});
