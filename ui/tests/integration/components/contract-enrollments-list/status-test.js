import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import contractEnrollments from '../../../fixtures/contract-enrollments';
import { stubTinyData } from '../../../helpers/stub-tiny-data';

let tinyData;
let requests;

module('Integration | Component | contract-enrollments-list/status', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractEnrollments);

    requests = [];
    this.updateFn = (enrollment, command) => {
      requests.push({ enrollment, command });
    };

    [this.enrollment] = tinyData.get('enrollment');
  });

  test('it renders with with an active enrollment', async function (assert) {
    this.enrollment.attributes = {
      ...this.enrollment.attributes,
      enrollmentStatus: 'enrolled',
      completionStatus: 'incomplete',
    };

    await render(hbs`
      <ContractEnrollmentsList::Status
        @enrollment={{enrollment}}
        @updateEnrollment={{updateFn}}
      />
    `);

    assert.ok(find('t-link[data-test-command="fulfill"]'), 'fulfillment link');
    assert.ok(find('t-link[data-test-command="cancel"]'), 'cancel link');

    await click('t-link[data-test-command="fulfill"]');

    assert.equal(requests.length, 1, 'outbound request occurred with click');
    const [request] = requests;

    assert.equal(request.enrollment, this.enrollment, 'enrollment was sent up');
    assert.equal(request.command, 'fulfill', 'expected command issued');
  });
});
