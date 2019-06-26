import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import userStaff from '../../fixtures/user-staff';
import loginStaff from '../../fixtures/login-staff';

import userAdmin from '../../fixtures/user-admin';
import loginAdmin from '../../fixtures/login-admin';

import { clone } from '../../helpers/test-utils';

module('Integration | Component | tiny-toolbar', (hooks) => {
  setupRenderingTest(hooks);

  let requests;

  hooks.beforeEach(function () {
    requests = [];
    this.setProperties({
      signin: () => {
        requests.push({ type: 'signin' });
      },
      signout: () => {
        requests.push({ type: 'signout' });
      },
    });
  });

  test('it renders in logged-in state, with staff user', async function (assert) {
    const user = clone(userStaff);
    const login = clone(loginStaff);

    this.setProperties({
      user: { ...user.data, permissions: login.permissions },
    });

    await render(hbs`
      {{tiny-toolbar
        user=user
        permissions=user.permissions
        signin=signin
        signout=signout
      }}
    `);

    assert.ok(find('[data-test-route="status-all-coordinators.index"]'), 'coordinators link is exposed');
    assert.ok(find('[data-test-route="students.index"]'), 'students link is exposed');
    assert.ok(find('[data-test-route="contracts.index"]'), 'contracts link is exposed');

    assert.notOk(find('[data-test-route="admin"]'), 'no admin links are exposed');

    await click('[data-test-signout]');

    assert.equal(requests.length, 1, 'expect one outgoing request');
    const request = requests.pop();
    assert.equal('signout', request.type, 'a signout action was triggered');
  });

  test('it renders in logged-in state, with admin user', async function (assert) {
    const user = clone(userAdmin);
    const login = clone(loginAdmin);

    this.setProperties({
      user: { ...user.data, permissions: login.permissions },
    });

    await render(hbs`
      {{tiny-toolbar
        user=user
        permissions=user.permissions
        signin=signin
        signout=signout
      }}
    `);
    assert.ok(find('[data-test-route="status-all-coordinators.index"]'), 'coordinators link is exposed');
    assert.ok(find('[data-test-route="students.index"]'), 'students link is exposed');
    assert.ok(find('[data-test-route="contracts.index"]'), 'contracts link is exposed');
    assert.ok(find('[data-test-route="admin"]'), 'admin links are exposed');
  });

  test('it renders in logged-out state', async function (assert) {
    this.setProperties({
      signin: () => {
        requests.push({ type: 'signin' });
      },
      signout: () => {
        requests.push({ type: 'signout' });
      },
    });

    await render(hbs`
      {{tiny-toolbar
        user=user
        permissions=user.permissions
        signin=signin
        signout=signout
      }}
    `);

    assert.notOk(find('[data-test-route="status-all-coordinators.index"]'), 'coordinators link is hidden');
    assert.notOk(find('[data-test-route="students.index"]'), 'students link is hidden');
    assert.notOk(find('[data-test-route="contracts.index"]'), 'contracts link is hidden');
    assert.notOk(find('[data-test-route="admin"]'), 'admin links are hidden');

    await click('[data-test-signin]');

    assert.equal(requests.length, 1, 'expect one outgoing request');
    const request = requests.pop();
    assert.equal('signin', request.type, 'a signin action was triggered');
  });
});
