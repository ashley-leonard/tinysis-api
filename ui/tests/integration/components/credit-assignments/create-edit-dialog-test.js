import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  find,
  click,
  fillIn,
  waitFor,
} from '@ember/test-helpers';
import { resolve } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';
import { stubCreditAssignment } from 'tinysis-ui/services/credit-assignment';
import { getNewCreditAssignmentForCreditable } from 'tinysis-ui/utils/credit-utils';

import contractEnrollmentsFixture from '../../../fixtures/contract-enrollments';
import creditsFixture from '../../../fixtures/credits-index';
import termsFixture from '../../../fixtures/terms';
import { stubTinyData } from '../../../helpers/stub-tiny-data';

let tinyData;
let terms;
let credits;
let requests;
let enrollment;

module('Integration | Component | CreditAssignments::CreateEditDialog', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:credit-assignment', stubCreditAssignment);

    tinyData = stubTinyData();
    tinyData.addResult(contractEnrollmentsFixture);
    tinyData.addResult(creditsFixture);
    tinyData.addResult(termsFixture);

    [enrollment] = tinyData.get('enrollment');

    terms = tinyData.get('term');
    credits = tinyData.get('credit');

    this.owner.lookup('service:credit-assignment').mockTinyData(tinyData);

    requests = [];

    this.setProperties({
      terms,
      today: new Date(2019, 8, 1),
      save: (model) => {
        requests.push({ type: 'save', model });
        return resolve(model);
      },
      reportError: (errors) => {
        requests.push({ type: 'error', errors });
      },
      close: () => {
        requests.push({ type: 'close' });
      },
    });
  });

  test('it creates a new credit assignment bound to an enrollment', async function (assert) {
    this.creditAssignment = getNewCreditAssignmentForCreditable(enrollment);

    await render(hbs`
      <CreditAssignments::CreateEditDialog
        @model={{creditAssignment}}
        @save={{this.save}}
        @close={{this.close}}
        @reportError={{this.reportError}}
      />
    `);

    assert.ok(find('form'), 'the form rendered');

    await fillIn('[data-test-credit-hours]', '0.5');
    await fillIn('t-type-ahead input', 'ding');
    await waitFor('ul.search-results');

    const [selectCredit] = credits;
    await click(`ul.search-results [data-test-value="${selectCredit.id}"]`);

    await fillIn('[data-test-credit-hours]', '0.5');

    await click('button[type="submit"]');

    const [request] = requests;
    assert.ok(request, 'request received');
    assert.ok(request.model, 'model was provided');
    assert.equal(request.type, 'save', 'it was a save request');
  });

  test('it does not permit submittal with invalid credit', async function (assert) {
    this.creditAssignment = getNewCreditAssignmentForCreditable(enrollment);

    await render(hbs`
      <CreditAssignments::CreateEditDialog
        @model={{creditAssignment}}
        @save={{this.save}}
        @close={{this.close}}
        @reportError={{this.reportError}}
      />
    `);

    assert.ok(find('form'), 'the form rendered');

    await fillIn('[data-test-credit-hours]', '');
    await click('button[type="submit"]');

    const [request] = requests;
    assert.ok(request, 'request received');
    assert.equal(request.type, 'error', 'it was a reportError request');
    assert.notOk(request.model, 'model was not provided');
    assert.ok(request.errors, 'error was provided');
  });
});
