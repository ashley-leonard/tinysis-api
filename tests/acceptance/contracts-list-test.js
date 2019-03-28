import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  find,
  findAll,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockServer, { provisionTinySisBootstrapRoutes } from '../helpers/mock-server';

import termsFixture from '../fixtures/terms';
import categoriesFixture from '../fixtures/categories';
import staffFixture from '../fixtures/staff';
import contractsFixture from '../fixtures/contracts';

let server;

module('Acceptance | contracts list', (hooks) => {
  setupApplicationTest(hooks);

  hooks.beforeEach((assert) => {
    server = new MockServer();
    provisionTinySisBootstrapRoutes(server);
    server.addRequest('get', '/api/terms', termsFixture);
    server.addRequest('get', '/api/categories', categoriesFixture);
    server.addRequest('get', '/api/staff', staffFixture);
    server.addRequest('get', '/api/contracts', contractsFixture);

    // this should always be done with mocks.
    // prevents test from hanging for minutes when Pretender crashes.
    assert.timeout(200);
  });

  hooks.afterEach(() => {
    server.shutdown();
  });

  test('visiting /tiny/contracts?schoolYear=2018 with matching contracts', async (assert) => {
    await visit('/tiny/contracts?schoolYear=2018');

    assert.equal(currentURL(), '/tiny/contracts?schoolYear=2018', 'page navigated to successfully');
    assert.ok(find('[data-test-contracts-list]'), 'contract list component rendered');
    assert.equal(findAll('[data-test-contracts-list-row]').length, contractsFixture.data.length, 'expected count of contract rows rendered');
  });

  test('visiting /tiny/contracts?schoolYear=2018 with no matching contracts', async (assert) => {
    const contracts = server.getFixture('/api/contracts');
    contracts.data = [];
    contracts.meta.count = 0;

    await visit('/tiny/contracts?schoolYear=2018');

    assert.equal(currentURL(), '/tiny/contracts?schoolYear=2018', 'page navigated to successfully');
    assert.notOk(find('[data-test-contracts-list]'), 'contract list component not rendered');
    assert.ok(find('p.no-results'), 'no-results component was rendered in place of table');
  });
});
