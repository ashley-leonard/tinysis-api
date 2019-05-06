import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import adminUsersFixtures from '../../fixtures/admin-users';
import staffFixture from '../../fixtures/staff';

let users;
let tinyDataServiceMock;

module('Integration | Component | users-list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(staffFixture);
    tinyDataServiceMock.addResult(adminUsersFixtures);

    users = adminUsersFixtures.data.map(user => tinyDataServiceMock.get('user', user.id));

    this.set('users', users);
  });

  test('it renders', async (assert) => {
    await render(hbs`
      {{users-list
        users=users
      }}
    `);

    assert.ok(find('table[data-test-admin-users-list]'), 'Table rendered');
    assert.equal(users.length, findAll('[data-test-admin-users-list-row]').length, 'expected count of user rows rendered');
  });
});
