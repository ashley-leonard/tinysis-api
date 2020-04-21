import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import { resolve } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import { clone } from '../../helpers/test-utils';

import contractEnrollments from '../../fixtures/contract-enrollments';
import contractDetail from '../../fixtures/contract-detail';
import contractStatuses from '../../fixtures/contract-statuses';
import notesContractStatuses from '../../fixtures/notes-contract-statuses';

let tinyDataServiceMock;

module('Integration | Component | status-by-contract', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    [contractDetail, contractEnrollments, contractStatuses, notesContractStatuses]
      .forEach(fixture => tinyDataServiceMock.addResult(fixture));

    this.getNotes = () => resolve(tinyDataServiceMock.get('note'));

    this.setProperties({
      enrollments: tinyDataServiceMock.get('enrollment'),
      statuses: tinyDataServiceMock.get('status'),
      contract: tinyDataServiceMock.get('contract', contractDetail.data.id),
      getNotes: () => resolve(clone(notesContractStatuses)),
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`
      {{status-by-contract
        enrollments=enrollments
        statuses=statuses
        contract=contract
        getNotes=getNotes
      }}
    `);

    assert.ok(find('table'), 'component rendered');
    const term = tinyDataServiceMock.get('term', contractDetail.data.relationships.term.data.id);
    assert.equal(findAll('th[data-test-term-month]').length, term.attributes.months.length, 'expected number of months columns were rendered');
    assert.equal(findAll('tbody').length, this.enrollments.length, 'expected count of table bodies given enrollments');
  });

  test('row renders as expected', async function (assert) {
    await render(hbs`
      {{status-by-contract
        enrollments=enrollments
        statuses=statuses
        contract=contract
        getNotes=getNotes
      }}
    `);

    const {
      enrollments,
      statuses,
    } = this;

    const [enrollment] = enrollments;
    const rowStatuses = statuses.filter(status => status.relationships.statusable.data.id === enrollment.id);

    rowStatuses.forEach((status) => {
      const selector = `td[data-test-month="${status.attributes.month}"][data-test-status-id="${status.id}"]`;
      assert.ok(find(selector), `for present status ${status.month}, a populated column is rendered`);
    });
  });
});
