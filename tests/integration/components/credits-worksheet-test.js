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
      splitCredits: (model) => {
        requests.push({ type: 'split', model });
        return resolve(model);
      },
      combineCredits: (model) => {
        requests.push({ type: 'split', model });
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
    const unapprovedCredit = unbatched.find(ca => ca.attributes.districtFinalizeApprovedOn);
    const approvedCredit = unbatched.find(ca => !ca.attributes.districtFinalizeApprovedOn);
    const combinableCredits = unbatched
      .filter(ca => !ca.relationships.childCreditAssignments.data.length)
      .slice(0, 2);

    debugger;
  });
});
