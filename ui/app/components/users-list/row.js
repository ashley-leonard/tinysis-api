import { alias, equal } from '@ember/object/computed';
import { computed } from '@ember/object';
import Row from '../students-list/row';

export default Row.extend({
  student: alias('user'),
  isStudent: equal('user.attributes.role', 'student'),
  hasLogin: computed('user.attributes.email', 'usersWithLogin', function () {
    return this.usersWithLogin[this.user.attributes.email];
  }),
});
