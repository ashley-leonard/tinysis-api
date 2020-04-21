import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { getChangedKeys } from '../../utils/json-api';
import { summarizeValidationError } from '../../utils/response-utils';
import { AUTH_USER_KEYS, isStaffRole, isActive } from '../../utils/user-utils';

export default Controller.extend({
  flashMessages: service(),
  tinyData: service(),
  actions: {
    getLogin(email) {
      const encEmail = encodeURIComponent(email);
      return this.tinyData.fetch(`/api/admin/logins/${encEmail}`);
    },

    updateLogin(data, login, attributesChanged) {
      return this.saveLogin(data, login, attributesChanged)
        .then((result) => {
          this.flashMessages.success('Login was successfully updated.');
          return result;
        });
    },

    destroyLogin(user, login) {
      return this.tinyData.fetch(`/api/admin/logins/${login.user_id}`, {
        method: 'DELETE',
      }).then((result) => {
        this.flashMessages.success(`Successfully removed access for user ${user.attributes.firstName} ${user.attributes.lastName}.`);
        return result;
      });
    },

    createLogin(user) {
      const { id } = user;

      const {
        firstName,
        lastName,
        nickname,
        email,
        role,
      } = user.attributes;
      const model = {
        firstName,
        lastName,
        nickname,
        email,
        role,
        id,
      };

      return this.tinyData.fetch('/api/admin/logins', {
        method: 'POST',
        data: { data: model },
      });
    },

    async saveUser(model) {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await this.tinyData.fetch(`/api/admin/users/${model.id}`, {
            method: 'PUT',
            data: { data: model },
          });

          const postSaveAction = await this.syncLogin(model, this.login);

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

  async syncLogin(model, login) {
    const user = this.get('user');
    const changedKeys = getChangedKeys(user, model);
    const actionRedirect = { action: 'redirect' };
    const actionPrompt = { action: 'prompt' };

    if (login) {
      if (['firstName', 'lastName', 'nickname', 'email'].find(value => changedKeys.includes(value))) {
        await this.saveLogin(model, login, changedKeys);
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
    if (!login && isStaffRole(user.attributes.role && isActive(user))) {
      return actionPrompt;
    }

    return actionRedirect;
  },

  // TODO should this reset the local user state? upon success?
  //
  saveLogin(updates, login, changedKeys = AUTH_USER_KEYS) {
    const model = changedKeys.reduce((memo, key) => {
      memo[key] = updates.attributes[key];
      return memo;
    }, {});

    return this.tinyData.fetch(`/api/admin/logins/${login.user_id}`, {
      method: 'PATCH',
      data: { data: model },
    });
  },
});
