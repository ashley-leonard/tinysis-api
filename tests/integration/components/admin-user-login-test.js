import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

import { clone } from '../../helpers/test-utils';
import adminLogin from '../../fixtures/auth-user-admin';
import adminUser from '../../fixtures/user-admin';

import staffLogin from '../../fixtures/auth-user-staff';
import staffUser from '../../fixtures/user-staff';

module('Integration | Component | admin-user-login', (hooks) => {
  setupRenderingTest(hooks);

  let requests;
  let login;
  let user;

  hooks.beforeEach(function () {
    requests = [];
    login = adminLogin;
    user = adminUser;

    this.setProperties({
      user,
    });

    this.getLogin = (u) => {
      requests.push({ type: 'get', user: u });
      return resolve(clone(login));
    };
    this.activateLogin = (u) => {
      requests.push({ type: 'activate', user: u });
      return resolve(clone(login));
    };
    this.updateLogin = (u, l) => {
      requests.push({ type: 'update', user: u, login: l });
      return resolve(clone(login));
    }
  });

  test('it renders', async function (assert) {
    await render(hbs`
      {{admin-user-login
        user=user
        activateLogin=activateLogin
        updateLogin=updateLogin
        destroyLogin=destroyLogin
        getLogin=getLogin
      }}
    `);

    assert.equal(this.element.textContent.trim(), 'NYI');
  });
});
