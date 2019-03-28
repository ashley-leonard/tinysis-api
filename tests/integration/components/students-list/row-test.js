import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { stubTinyData, clone } from '../../../helpers/stub-tiny-data';
import staffFixture from '../../../fixtures/staff';
import studentsFixture from '../../../fixtures/students';

let tinyDataServiceMock;

module('Integration | Component | students-list/row', (hooks) => {
  setupRenderingTest(hooks);

  let student;

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(staffFixture);
    tinyDataServiceMock.addResult(studentsFixture);

    [student] = studentsFixture.data;
    this.set('student', clone(student));
  });

  test('it renders', async (assert) => {
    await render(hbs`
      <table>
        <tbody>
          {{students-list/row
            student=student
          }}
        </tbody>
      </table>
    `);

    assert.ok(find('tr[data-test-students-list-row]'), 'row successfully rendered');

    const coordinator = tinyDataServiceMock.get('user', student.relationships.coordinator.data.id);
    assert.ok(coordinator, 'coordinator retrieved');

    assert.matches(find('td[data-test-student-name').textContent, student.attributes.lastName);
    assert.matches(find('td[data-test-coordinator-name').textContent, coordinator.attributes.lastName);
    assert.matches(find('td[data-test-district-grade').textContent, student.attributes.districtGrade);
  });
});
