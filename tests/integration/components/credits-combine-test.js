import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click, findAll, fillIn } from '@ember/test-helpers';
import { Interactor } from '@bigtest/interactor'
import { resolve } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';
import studentCreditAssignmentsFixture from '../../fixtures/student-credit-assignments';
import creditsFixture from '../../fixtures/credits-index';
import termsFixture from '../../fixtures/terms';
import { stubTinyData } from '../../helpers/stub-tiny-data';

let tinyData;
let creditAssignments;
let credits;
let terms;
let creditsToCombine;
let requests;

module('Integration | Component | credits-combine', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(studentCreditAssignmentsFixture);
    tinyData.addResult(creditsFixture);
    tinyData.addResult(termsFixture);

    credits = tinyData.get('credit');
    creditAssignments = tinyData.get('creditAssignment');
    terms = tinyData.get('term');

    creditsToCombine = creditAssignments
      .filter(ca => ca.relationships.user.data)
      .slice(0, 3);

    requests = [];

    this.setProperties({
      creditsToCombine,
      credits,
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

  test('it renders and can post through a default combined credit', async (assert) => {
    await render(hbs`
      <CreditsCombine
        @availableCredits={{credits}}
        @creditAssignments={{creditsToCombine}}
        @today={{today}}
        @terms={{terms}}
        @save={{this.save}}
        @close={{this.close}}
        @reportError={{this.reportError}}
      />
    `);

    assert.ok(find('form'), 'the form rendered');

    const termSelect = find('select[name="contractTerm"]');
    const creditSelect = find('select[name="credit"]');
    const hoursSpan = find('span[data-test-credit-hours]');

    assert.ok(termSelect, 'rendered term select');
    assert.ok(creditSelect, 'rendered term select');
    assert.ok(hoursSpan, 'rendered hours span');

    const [firstCredit] = creditsToCombine;

    const expectedTermOption = find(`select[name="contractTerm"] option[value="${firstCredit.relationships.contractTerm.data.id}"]`);
    const expectedCreditOption = find(`select[name="credit"] option[value="${firstCredit.relationships.credit.data.id}"]`);

    assert.ok(expectedTermOption, 'found expected term selection');
    assert.ok(expectedCreditOption, 'found expected credit selection');

    assert.ok(expectedTermOption.selected, 'expected term option is selected');
    assert.ok(expectedCreditOption.selected, 'expected credit option is selected');

    const computedCredits = creditsToCombine.reduce((sum, ca) => {
      sum = ca.attributes.creditHours + sum;
      return sum;
    }, 0);

    let creditHours = find('span[data-test-credit-hours]');
    assert.ok(creditHours, 'creditHours static field is rendered');

    assert.matches(creditHours.textContent, computedCredits.toString(), 'expected default credit hours');

    await click('[data-test-toggle-override]');

    creditHours = find('input[data-test-credit-hours]');
    assert.ok(creditHours, 'creditHours input field is rendered');

    assert.matches(creditHours.value, computedCredits.toString(), 'expected default credit hours');

    await click('button');

    assert.equal(requests.length, 1, 'an action call was made');

    const request = requests.pop();

    assert.equal(request.type, 'save', 'a save request was sent');
    assert.ok(request.model, 'a model was sent');
    assert.equal(request.model.relationships.contractTerm.data.id, firstCredit.relationships.contractTerm.data.id, 'correct term');
    assert.equal(request.model.relationships.credit.data.id, firstCredit.relationships.credit.data.id, 'correct credit');
    assert.equal(request.model.attributes.creditHours, '1.25', 'correct credit hours');
  });

  test('it renders a combined credit and then reports and recovers from validation failure', async (assert) => {
    await render(hbs`
      <CreditsCombine
        @availableCredits={{credits}}
        @creditAssignments={{creditsToCombine}}
        @today={{today}}
        @terms={{terms}}
        @save={{this.save}}
        @close={{this.close}}
        @reportError={{this.reportError}}
      />
    `);

    assert.ok(find('form'), 'the form rendered');

    await click('[data-test-toggle-override]');
    await fillIn('[data-test-credit-hours]', '');
    await new Interactor('select[name="contractTerm"]').select('Select a term')
    await new Interactor('select[name="credit"]').select('Select a course')

    await click('button[type="submit"]');

    assert.equal(requests.length, 1, 'one request was made');

    let [request] = requests;

    assert.matches(request.type, 'error', 'error reported');

    assert.ok(request.errors, 'with an error object');
    ['creditsOverride', 'contractTerm', 'credit'].forEach((field) => {
      assert.ok(request.errors[field], `${field} was flagged`);
    });
  });
});
