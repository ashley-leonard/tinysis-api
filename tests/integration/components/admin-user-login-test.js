import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve, reject } from 'rsvp';

import { clone } from '../../helpers/test-utils';
import adminLogin from '../../fixtures/login-admin';
import adminUser from '../../fixtures/user-admin';

module('Integration | Component | admin-user-login', (hooks) => {
  setupRenderingTest(hooks);

  let requests;
  let login;
  let user;

  hooks.beforeEach(function () {
    requests = [];
    login = clone(adminLogin);
    user = clone(adminUser);

    this.setProperties({
      user: user.data,
    });

    this.getLogin = (u) => {
      requests.push({ type: 'get', user: u });
      if (login) return resolve(login);

      return reject();
    };

    this.createLogin = (u) => {
      requests.push({ type: 'activate', user: u });
      return resolve(login);
    };

    this.updateLogin = (u, l) => {
      requests.push({ type: 'update', user: u, login: l });
      return resolve(login);
    };

    this.destroyLogin = (l) => {
      requests.push({ type: 'destroy', login: l });
      return resolve(login);
    };
  });

  function renderComponent() {
    return render(hbs`
      {{admin-user-login
        user=user
        createLogin=createLogin
        updateLogin=updateLogin
        destroyLogin=destroyLogin
        getLogin=getLogin
      }}
    `);
  }

  test('synchronized admin user and login', async (assert) => {
    await renderComponent();

    assert.matches(find('h3').textContent, /login active/i);
    assert.notOk(find('div.notice'), 'no notice was rendered');

    assert.equal(requests.length, 1, 'one outbound action call');

    const request = requests.pop();
    assert.equal(request.type, 'get', 'get action was called');
  });

  test('admin user role is synchronized, but other attributes are not', async function (assert) {
    this.user.attributes.firstName = 'Benjamin';
    this.user.attributes.lastName = 'Bunny';

    await renderComponent();

    assert.matches(this.element.textContent.trim(), /login active/i);

    const notice = find('.notice [data-test-reason="attributes"]');
    assert.ok(notice, 'attributes notice was rendered');
  });

  test('user roles don\'t match', async function (assert) {
    this.user.attributes.role = 'staff';

    await renderComponent();

    assert.matches(this.element.textContent.trim(), /role needs to be synced/i);

    const notice = find('.notice [data-test-reason="roles"]');
    assert.ok(notice, 'roles notice was rendered');

    await click('button');

    assert.equal(requests.length, 2, 'two outbound action calls');
    assert.equal(requests.pop().type, 'update', 'update action was called as the last request');
  });

  test('user is inactive, but login is still active', async function (assert) {
    this.user.attributes.status = 'inactive';

    await renderComponent();

    assert.matches(this.element.textContent.trim(), /login active/i);

    const notice = find('.notice [data-test-reason="deactivate"]');
    assert.ok(notice, 'deactivate notice was rendered');

    await click('button');

    assert.equal(requests.length, 2, 'two outbound action calls');
    assert.equal(requests.pop().type, 'destroy', 'destroy action was called as the last request');
  });

  test('user is not a staff member, but login exists', async function (assert) {
    this.user.attributes.role = 'student';

    await renderComponent();

    assert.matches(this.element.textContent.trim(), /login active/i);

    const notice = find('.notice [data-test-reason="deactivate"]');
    assert.ok(notice, 'deactivate notice was rendered');

    await click('button');

    assert.equal(requests.length, 2, 'two outbound action calls');
    assert.equal(requests.pop().type, 'destroy', 'destroy action was called as the last request');
  });

  test('login needs to be activated', async function (assert) {
    const savedLogin = login;
    
    login = null;

    await renderComponent();

    assert.matches(this.element.textContent.trim(), /no login for/i);

    const notice = find('.notice [data-test-reason="activate"]');
    assert.ok(notice, 'create login notice was rendered');

    login = savedLogin;

    await click('button');

    assert.equal(requests.length, 2, 'two outbound action calls');
    assert.equal(requests.pop().type, 'activate', 'activation action was called as the last request');
  });
});
