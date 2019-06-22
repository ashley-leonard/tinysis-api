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

  showAccessWarning: computed('user', 'authorizedUser', function () {
    const userIsActive = isActive(this.user);
    const userIsStaff = isStaff(this.user);
    const authorizedUser = this.get('authorizedUser');

    // An active admin or staff member should have an identity.
    if (userIsActive && userIsStaff && !authorizedUser) {
      return true;
    }

    return false;
  }),

  attributesOutOfSync: computed('user', 'authorizedUser', function () {
    const {
      user,
      authorizedUser,
      showRoleRequiresUpdate,
      showRemoveOption,
    } = this;

    if (showRoleRequiresUpdate || showRemoveOption) return false;
    if (!authorizedUser) return false;

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
      const result = (user.attributes[userKey] || undefined) !== authorizedUser[authKey];

      return result;
    });

    return attributesMismatch.length ? attributesMismatch : null;
  }),

  showRoleRequiresUpdate: computed('user', 'authorizedUser', function () {
    const {
      user,
      authorizedUser,
      showRemoveOption,
    } = this;

    if (showRemoveOption) return false;
    if (!authorizedUser) return false;

    const tinyRole = user.attributes.role || '';
    const authRoles = authorizedUser.roles || [];
    const authRole = authRoles.map(r => r.name.toLowerCase()).join('');

    return (isStaff(user) && tinyRole !== authRole);
  }),

  showRemoveOption: computed('user', 'authorizedUser', function () {
    const userIsInactive = !isActive(this.user);
    const userIsStaff = isStaff(this.user);
    const authorizedUserExists = Boolean(this.authorizedUser);

    return (userIsInactive || !userIsStaff) && authorizedUserExists;
  }),

  async didReceiveAttrs() {
    const { role } = this;
    const currentUserRole = this.get('user.attributes.role');

    if (role === currentUserRole) return;

    this.set('role', currentUserRole);

    let authorizedUser;
    try {
      authorizedUser = await this.getAuthorizedUser(this.get('user.attributes.email'));
    } catch (e) {
      authorizedUser = null;
    }

    this.setProperties({
      authorizedUser,
      loading: false,
    });
  },

  actions: {
    async activateUser(user) {
      this.set('updating', true);
      const updatedUser = await this.activateUser(user);
      if (!this.isDestroyed) {
        this.setProperties({
          updating: false,
          authorizedUser: updatedUser,
        });
      }
    },

    async removeAuthorizedUser(authorizedUser) {
      this.set('updating', true);
      await this.destroyAuthorizedUser(authorizedUser);
      if (!this.isDestroyed) {
        this.setProperties({
          updating: false,
          authorizedUser: null,
        });
      }
    },

    async updateAuthorizedUser(user, authorizedUser) {
      const {
        attributesOutOfSync,
        showRoleRequiresUpdate,
      } = this;
      const changed = (attributesOutOfSync || []);

      if (showRoleRequiresUpdate) {
        changed.push('role');
      }

      this.set('updating', true);
      const updatedUser = await this.updateAuthorizedUser(user, authorizedUser, changed);
      if (!this.isDestroyed) {
        this.setProperties({
          updating: false,
          authorizedUser: updatedUser.data,
        });
      }
    },
  },
});
