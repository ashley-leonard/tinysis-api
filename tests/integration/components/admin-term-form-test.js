import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import { Interactor } from '@bigtest/interactor';
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

    let request = requests.pop();
    assert.ok(request, 'a request was made');
    assert.equal(request.type, 'save', 'it was a save request');
    assert.deepEqual(request.pojo, this.term, 'The unchanged term was resubmitted');

    // Change the school year and resubmit, check the dates
    const previousYear = (term.attributes.schoolYear - 1).toString();
    await new Interactor(find('select[name="schoolYear"]')).select(previousYear);

    await click('button[type="submit"]');

    request = requests.pop();
    assert.ok(request, 'another request was made');
    assert.equal(request.type, 'save', 'it was a save request');

    assert.equal(request.pojo.attributes.schoolYear, previousYear, 'previous year selected as expected');
    assert.equal(request.pojo.attributes.months[0], '2018-09-01', 'reporting months were transformed to the changed year');
  });
});
