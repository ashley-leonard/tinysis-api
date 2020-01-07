import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { summarizeValidationError } from '../../utils/response-utils';
import {
  AUTH_USER_KEYS,
  isStaffRole,
} from '../../utils/user-utils';

export default Controller.extend({
  tinyData: service(),
  flashMessages: service(),
  actions: {
    async saveUser(data) {
      return new Promise(async (resolve, reject) => {
        let userResult;
        try {
          userResult = await this.tinyData.fetch('/api/admin/users', {
            method: 'POST',
            data,
          });

          if (!isStaffRole(userResult.data.attributes.role)) {
            this.redirectSuccess();
            return resolve(userResult);
          }
        } catch (e) {
          this.flashMessages.alert(summarizeValidationError(e));
          return reject(e);
        }

        const authPostBody = AUTH_USER_KEYS.reduce((memo, key) => {
          memo[key] = userResult.data.attributes[key];
          return memo;
        }, {});

        try {
          await this.tinyData.fetch('/api/admin/login', {
            method: 'POST',
            data: { data: authPostBody },
          });

          this.redirectSuccess(userResult);
          return resolve(userResult);
        } catch (e) {
          this.flashMessages.alert(summarizeValidationError(e));
          return reject(e);
        }
      });
    },

    reportError() {
      this.flashMessages.alert('Please check the values and correct any errors');
    },
  },

  redirectSuccess() {
    this.flashMessages.success('User was successfully saved.');
    this.transitionToRoute('admin-users.index');
  },
});
