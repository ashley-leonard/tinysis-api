import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, fillIn } from '@ember/test-helpers';
import { Interactor } from '@bigtest/interactor';
import hbs from 'htmlbars-inline-precompile';

import { stubTinyData, clone } from '../../helpers/stub-tiny-data';
import staffFixture from '../../fixtures/staff';
import studentsFixture from '../../fixtures/students';

let tinyDataServiceMock;
let requests;

module('Integration | Component | students-filter', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(staffFixture);
    tinyDataServiceMock.addResult(studentsFixture);

    requests = [];

    this.setProperties({
      schoolYears: [2019, 2018, 2017, 2016],
      queryParams: {
        schoolYear: 2019,
      },
      coordinators: clone(staffFixture.data),
      filterStudents: (queryParams) => {
        this.set('queryParams', queryParams);
        requests.push(queryParams);
      },
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`
      {{students-filter
        queryParams=queryParams
        schoolYears=schoolYears
        coordinators=coordinators
        onQuery=filterStudents
      }}
    `);

    assert.ok(find('form'), 'form rendered');

    assert.equal(0, requests.length, 'no change request sent on render');

    const select = new Interactor('select[name="schoolYear"]');
    assert.equal(select.value, '2019', 'school year selector is set to 2018 per attributes');

    await select.select('2017');

    assert.equal(requests.length, 1, 'now one request was made');
    const [schoolYearRequest] = requests;

    assert.equal(schoolYearRequest.schoolYear, '2017', 'expected year was requested');
    assert.equal(select.value, '2017', 'school year selector is set to 2017 now');

    this.set('queryParams', { ...this.queryParams, name: 'boyd' });

    await fillIn('input[name="name"]', 'boyd');
    assert.equal(requests.length, 2, 'now another request was made');
    const [, nameRequest] = requests;

    assert.equal(nameRequest.name, 'boyd', 'the typed name was sent');
    assert.equal(nameRequest.schoolYear, '2017', 'the former schoolyear was retained and re-sent');
  });
});
