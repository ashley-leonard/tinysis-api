import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import contractEnrollments from '../../fixtures/contract-enrollments';
import contractEnrollmentsNotes from '../../fixtures/notes-contract-enrollments';

let tinyData;

module('Integration | Component | contract-enrollments-list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractEnrollments);
    tinyData.addResult(contractEnrollmentsNotes);

    this.enrollments = contractEnrollments.data;
    this.getNotes = () => resolve(contractEnrollmentsNotes);
  });

  test('it renders', async (assert) => {
    await render(hbs`
      {{contract-enrollments-list
        enrollments=enrollments
        getNotes=getNotes
      }}
    `);

    assert.equal(findAll('tbody').length, contractEnrollments.data.length, 'expected number of tbodies rendered');
    assert.equal(findAll('tr.notes-row').length, contractEnrollments.data.length, 'expected number of note rows rendered');
  });
});
