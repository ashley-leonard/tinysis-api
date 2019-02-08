import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import contractEnrollments from '../../../fixtures/contract-enrollments';
import contractEnrollmentsNotes from '../../../fixtures/notes-contract-enrollments';

let tinyData;

module('Integration | Component | contracts/enrollments-list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractEnrollments);

    this.enrollments = contractEnrollments.data;
    this.getNotes = () => contractEnrollmentsNotes;
  });

  test('it renders', async function (assert) {
    await render(hbs`
      {{contracts/enrollments-list
        enrollments=enrollments
        getNotes=getNotes
      }}
    `);

    assert.equal(this.element.querySelectorAll('tbody').length, contractEnrollments.data.length, 'expected number of tbodies rendered');
    assert.equal(this.element.querySelectorAll('tr.notes-row').length, contractEnrollments.data.length, 'expected number of note rows rendered');
  });
});
