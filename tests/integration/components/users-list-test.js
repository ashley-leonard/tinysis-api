import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import { clone } from '../../helpers/test-utils';
import adminUsersFixtures from '../../fixtures/admin-users';
import adminUsersLogins from '../../fixtures/admin-users-logins';
import staffFixture from '../../fixtures/staff';

let users;
let tinyDataServiceMock;
let logins;

module('Integration | Component | users list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(staffFixture);
    tinyDataServiceMock.addResult(adminUsersFixtures);

    users = adminUsersFixtures.data.map(user => tinyDataServiceMock.get('user', user.id));
    logins = clone(adminUsersLogins).data;

    this.setProperties({
      users,
      logins,
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`
      {{users-list
        users=users
        logins=logins
      }}
    `);

    assert.ok(find('table[data-test-admin-users-list]'), 'Table rendered');
    assert.equal(users.length, findAll('[data-test-admin-users-list-row]').length, 'expected count of user rows rendered');

    assert.equal(findAll('[data-test-has-login]').length, 0, 'no logins apparent since no email matches');

    const [adminLogin] = logins;
    const adminUser = users.find(user => user.attributes.role === 'administrator');

    adminLogin.attributes.email = adminUser.attributes.email;
    this.set('logins', [adminLogin]);

    assert.equal(findAll('[data-test-has-login]').length, 1, 'now with a matching email, there is one login indicated');
  });
});
