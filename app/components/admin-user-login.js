import Component from '@ember/component';
import { computed } from '@ember/object';
import { bool } from '@ember/object/computed';
import {
  isActive,
  isStaff,
} from '../utils/user-utils';

export default Component.extend({
  tagName: '',

  loading: true,

  showAttributesDontMatch: bool('attributesOutOfSync'),

  showAccessWarning: computed('user', 'login', function () {
    const userIsActive = isActive(this.user);
    const userIsStaff = isStaff(this.user);
    const login = this.get('login');

    // An active admin or staff member should have an identity.
    if (userIsActive && userIsStaff && !login) {
      return true;
    }

    return false;
  }),

  attributesOutOfSync: computed('user', 'login', function () {
    const {
      user,
      login,
      showRoleRequiresUpdate,
      showRemoveOption,
    } = this;

    if (showRoleRequiresUpdate || showRemoveOption) return false;
    if (!login) return false;

    const comparitors = [{
      user: 'firstName',
      auth: 'given_name',
    }, {
      user: 'lastName',
      auth: 'family_name',
    },
    'email',
    ];

    const attributesMismatch = comparitors.filter((comparitor) => {
      const userKey = comparitor.user || comparitor;
      const authKey = comparitor.auth || comparitor;
      const result = (user.attributes[userKey] || undefined) !== login[authKey];

      return result;
    });

    return attributesMismatch.length ? attributesMismatch : null;
  }),

  showRoleRequiresUpdate: computed('user', 'login', function () {
    const {
      user,
      login,
      showRemoveOption,
    } = this;

    if (showRemoveOption) return false;
    if (!login) return false;

    const tinyRole = user.attributes.role || '';
    const authRoles = login.roles || [];
    const authRole = authRoles.map(r => r.name.toLowerCase()).join('');

    return (isStaff(user) && tinyRole !== authRole);
  }),

  showRemoveOption: computed('user', 'login', function () {
    const userIsInactive = !isActive(this.user);
    const userIsStaff = isStaff(this.user);
    const loginExists = Boolean(this.login);

    return (userIsInactive || !userIsStaff) && loginExists;
  }),

  async didReceiveAttrs() {
    const { role } = this;
    const currentUserRole = this.get('user.attributes.role');

    if (role === currentUserRole) return;

    this.set('role', currentUserRole);

    let login;
    try {
      login = await this.getLogin(this.get('user.attributes.email'));
    } catch (e) {
      login = null;
    }

    this.setProperties({
      login,
      loading: false,
    });
  },

  actions: {
    async activateLogin(user) {
      this.set('updating', true);
      const updatedLogin = await this.activateLogin(user);
      if (!this.isDestroyed) {
        this.setProperties({
          updating: false,
          login: updatedLogin,
        });
      }
    },

    async destroyLogin(login) {
      this.set('updating', true);
      await this.destroyLogin(login);
      if (!this.isDestroyed) {
        this.setProperties({
          updating: false,
          login: null,
        });
      }
    },

    async updateLogin(user, login) {
      const {
        attributesOutOfSync,
        showRoleRequiresUpdate,
      } = this;
      const changed = (attributesOutOfSync || []);

      if (showRoleRequiresUpdate) {
        changed.push('role');
      }

      this.set('updating', true);
      const updatedLogin = await this.updateLogin(user, login, changed);
      if (!this.isDestroyed) {
        this.setProperties({
          updating: false,
          login: updatedLogin.data,
        });
      }
    },
  },
});
