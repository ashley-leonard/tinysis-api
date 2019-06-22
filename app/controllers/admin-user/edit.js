import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import fetch from '../../utils/fetch';
import { getChangedKeys } from '../../utils/json-api';
import { summarizeValidationError } from '../../utils/response-utils';
import { AUTH_USER_KEYS, isStaffRole, isActive } from '../../utils/user-utils';

export default Controller.extend({
  flashMessages: service(),
  tinyData: service(),
  actions: {
    getAuthorizedUser(email) {
      const encEmail = encodeURIComponent(email);
      return fetch(`/api/admin/authorized-users?email=${encEmail}`)
        .then((response) => {
          this.set('authorizedUser', response.data);
          return response.data;
        });
    },

    updateAuthorizedUser(data, authorizedUser, attributesChanged) {
      return this.saveAuthorizedUser(data, authorizedUser, attributesChanged)
        .then((result) => {
          this.set('authorizedUser', result);
          this.flashMessages.success('Login was successfully updated.');
          return result;
        });
    },

    destroyAuthorizedUser(authorizedUser) {
      return fetch(`/api/admin/authorized-users/${authorizedUser.user_id}`, {
        method: 'DELETE',
      });
    },

    activateUser(user) {
      const {
        firstName,
        lastName,
        nickname,
        email,
        role,
      } = user.attributes;
      const data = {
        firstName,
        lastName,
        nickname,
        email,
        role,
      };

      return fetch('/api/admin/authorized-users', {
        method: 'POST',
        body: JSON.stringify({ data }),
      });
    },

    async saveUser(data) {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await this.tinyData.fetch(`/api/admin/users/${data.id}`, {
            method: 'PUT',
            body: JSON.stringify({ data }),
          });

          const postSaveAction = await this.syncAuthorizedUser(data, this.authorizedUser);

          switch (postSaveAction.action) {
            case 'redirect':
              this.flashMessages.success('User was successfully saved.');
              this.transitionToRoute('admin-users.index');
              break;

            case 'prompt':
              this.set('user', result.data);
              this.flashMessages.success('User was successfully saved. Please review the prompts as there may be followup actions.');
              break;

            default:
              return reject(new Error('unknown action'));
          }

          return resolve(result);
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

  async syncAuthorizedUser(data, authorizedUser) {
    const user = this.get('user');
    const changedKeys = getChangedKeys(user, data);
    const actionRedirect = { action: 'redirect' };
    const actionPrompt = { action: 'prompt' };

    if (authorizedUser) {
      if (['firstName', 'lastName', 'nickname', 'email'].find(value => changedKeys.includes(value))) {
        await this.saveAuthorizedUser(data, authorizedUser, changedKeys);
      }
    }

    // would indicate potential state change from no-login to login
    // remain on page for follow-up prompts
    //
    if (changedKeys.includes('role') || changedKeys.includes('status')) {
      return actionPrompt;
    }

    // No authorized user, and user is now >= staff and active
    //
    if (!authorizedUser && isStaffRole(user.attributes.role && isActive(user))) {
      return actionPrompt;
    }

    return actionRedirect;
  },

  // TODO should this reset the local user state? upon success?
  //
  saveAuthorizedUser(data, authorizedUser, changedKeys = AUTH_USER_KEYS) {
    const body = changedKeys.reduce((memo, key) => {
      memo[key] = data.attributes[key];
      return memo;
    }, {});

    return fetch(`/api/admin/authorized-users/${authorizedUser.user_id}`, {
      method: 'PATCH',
      body: JSON.stringify({ data: body }),
    });
  },
});
