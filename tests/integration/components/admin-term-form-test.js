import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { Promise } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import adminTermDetailFixture from '../../fixtures/admin-term-detail';

let term;
let tinyDataServiceMock;
let requests;

module('Integration | Component | admin-term-form', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(adminTermDetailFixture);

    term = tinyDataServiceMock.get('term', adminTermDetailFixture.data.id);

    requests = [];

    this.setProperties({
      term,
      schoolYears: [term.attributes.schoolYear + 1, term.attributes.schoolYear, term.attributes.schoolYear - 1],
      reportingBaseMonth: 9,
      save(pojo) {
        requests.push({ type: 'save', pojo });
        return Promise.resolve();
      },
      reportError(error) {
        requests.push({ type: 'error', error });
      },
    });
  });

  test('it renders and can submit a valid term', async function (assert) {
    await render(hbs`
      {{admin-term-form
        model=term
        schoolYears=schoolYears
        reportingBaseMonth=reportingBaseMonth
        save=save
        reportError=reportError
      }}
    `);

    await click('button[type="submit"]');

    assert.equal(requests.length, 1, 'outbound request was made');
    const [request] = requests;
    assert.equal(request.type, 'save', 'it was a save request');
    assert.deepEqual(request.pojo, this.term, 'The unchanged term was resubmitted');

    // Change the school year and resubmit, check the dates

    // Remove the name or credit date and resubmit, get an error
    assert.ok(false, 'not yet implemented');
  });
});
