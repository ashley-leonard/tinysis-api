import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render, find, click, findAll,
} from '@ember/test-helpers';
import { resolve } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';
import studentCreditAssignmentsFixture from '../../fixtures/student-credit-assignments-with-combined';
import { stubTinyData } from '../../helpers/stub-tiny-data';

let tinyData;
let creditAssignments;
let requests;

module('Integration | Component | credits-worksheet', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(studentCreditAssignmentsFixture);

    creditAssignments = tinyData.get('creditAssignment');

    requests = [];

    this.setProperties({
      creditAssignments,
      splitCredit: (model) => {
        requests.push({ type: 'split', model });
        return resolve(model);
      },
      combineCredits: (model) => {
        requests.push({ type: 'combine', model });
      },
      approveCredit: (model) => {
        requests.push({ type: 'approve', model });
      },
    });
  });

  test('it renders with a set of student credits', async (assert) => {
    await render(hbs`
      <CreditsWorksheet
        @student={{student}}
        @creditAssignments={{creditAssignments}}
        @showCombine={{this.combineCredits}}
        @splitCredit={{this.splitCredit}}
        @approveCredit={{this.approveCredit}}
      />    
    `);

    assert.ok(find('[data-test-credits-worksheet]'), 'worksheet table rendered');

    const unbatched = creditAssignments.filter(ca => !ca.relationships.creditTransmittalBatch.data);
    const countParagraph = find(`[data-test-count-paragraph="${unbatched.length}"]`);
    assert.ok(countParagraph, 'the expected count was rendered');

    assert.equal(findAll('tbody tr').length, unbatched.length, 'expected count of rows rendered');

    const creditWithChildren = unbatched.find(ca => ca.relationships.childCreditAssignments.data.length);
    const unapprovedCredit = unbatched.find(ca => !ca.attributes.districtFinalizeApprovedOn && ca.id !== creditWithChildren.id);
    const approvedCredit = unbatched.find(ca => ca.attributes.districtFinalizeApprovedOn && ca.id !== creditWithChildren.id);
    const combinableCredits = unbatched
      .filter(ca => !ca.relationships.childCreditAssignments.data.length)
      .slice(0, 2);

    // testing a credit with children, unapproved
    let tr = find(`tr[data-test-credit-id="${creditWithChildren.id}"]`);
    assert.ok(tr, 'row was found for credit combined with children');
    let checkbox = tr.querySelector('input[type="checkbox"]');
    assert.ok(checkbox, 'a checkbox was rendered');
    assert.equal(checkbox.disabled, true, 'the checkbox is disabled');
    assert.ok(tr.querySelector('[data-test-split-link]'), 'a split link was rendered');
    assert.ok(tr.querySelector('[data-test-approve-link]'), 'an approve link was rendered');
    assert.ok(tr.querySelector('[data-test-unapproved]'), 'the link is shown as unapproved');

    await click(tr.querySelector('[data-test-split-link]'));
    let request = requests.pop();
    assert.ok(request, 'a request was sent upon clicking split');
    assert.ok(request.type, 'split', 'it was a split request');
    assert.equal(request.model.id, creditWithChildren.id, 'the model sent with the split command was correct');

    await click(tr.querySelector('[data-test-approve-link]'));
    request = requests.pop();
    assert.ok(request, 'a request was sent upon clicking approve');
    assert.ok(request.type, 'split', 'it was an approve request');
    assert.equal(request.model.id, creditWithChildren.id, 'the model sent with the split command was correct');

    // testing an approved credit
    tr = find(`tr[data-test-credit-id="${approvedCredit.id}"]`);
    assert.ok(tr, 'row was found for approved credit');
    checkbox = tr.querySelector('input[type="checkbox"]');
    assert.ok(checkbox, 'a checkbox was rendered');
    assert.equal(checkbox.disabled, false, 'the checkbox is enabled');
    assert.notOk(tr.querySelector('[data-test-split-link]'), 'a split link was not rendered');
    assert.ok(tr.querySelector('[data-test-approve-link]'), 'an approve link was rendered');
    assert.ok(tr.querySelector('[data-test-approved]'), 'the link is shown as approved');

    await click(tr.querySelector('[data-test-approve-link]'));
    request = requests.pop();
    assert.ok(request, 'a request was sent upon clicking approve');
    assert.ok(request.type, 'split', 'it was an approve request');
    assert.equal(request.model.id, approvedCredit.id, 'the model sent with the split command was correct');

    // testing an unapproved credit
    tr = find(`tr[data-test-credit-id="${unapprovedCredit.id}"]`);
    assert.ok(tr, 'row was found for unapproved credit');
    checkbox = tr.querySelector('input[type="checkbox"]');
    assert.ok(checkbox, 'a checkbox was rendered');
    assert.equal(checkbox.disabled, false, 'the checkbox is enabled');
    assert.notOk(tr.querySelector('[data-test-split-link]'), 'a split link was not rendered');
    assert.ok(tr.querySelector('[data-test-approve-link]'), 'an approve link was rendered');
    assert.ok(tr.querySelector('[data-test-unapproved]'), 'the link is shown as unapproved');

    await click(tr.querySelector('[data-test-approve-link]'));
    request = requests.pop();
    assert.ok(request, 'a request was sent upon clicking approve');
    assert.ok(request.type, 'split', 'it was an approve request');
    assert.equal(request.model.id, unapprovedCredit.id, 'the model sent with the split command was correct');

    // can trigger combine dialog
    await click(`tr[data-test-credit-id="${combinableCredits[0].id}"] input[type="checkbox"]`);
    await click(`tr[data-test-credit-id="${combinableCredits[1].id}"] input[type="checkbox"]`);
    await click('[data-test-combine-credits]');

    request = requests.pop();
    assert.ok(request, 'a request was sent when combine link clicked');
    assert.equal(request.type, 'combine', 'the request was a combine action firing');
  });
});
