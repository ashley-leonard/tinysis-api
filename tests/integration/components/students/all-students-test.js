import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { stubTinyData } from '../../../helpers/stub-tiny-data';
import staffFixture from '../../../fixtures/staff';
import studentsFixture from '../../../fixtures/students';

let tinyDataServiceMock;

module('Integration | Component | students/all-students', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(staffFixture);
    tinyDataServiceMock.addResult(studentsFixture);

    const studentIds = studentsFixture.data.map(student => student.id);
    this.set('students', tinyDataServiceMock.get('user').filter(user => studentIds.includes(user.id)));
  });

  test('it renders', async function (assert) {
    await render(hbs`
      {{students/all-students
        students=students
      }}
    `);

    assert.ok(find('table.all-students'), 'Table rendered');
    assert.equal(this.students.length, findAll('tbody').length, 'expected count of student rows rendered');
  });
});
