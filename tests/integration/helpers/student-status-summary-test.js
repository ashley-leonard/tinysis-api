import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { clone } from '../../helpers/test-utils';

const studentFixture = {
  id: '5',
  type: 'user',
  attributes: {
    firstName: 'Eliana',
    lastName: 'Pfannerstill',
    nickname: null,
    dateActive: '2018-08-01',
    dateInactive: null,
    districtId: '9816947609',
    districtGrade: 12,
    status: 'active',
    role: 'student',
    email: null,
  },
};

let student;

module('Integration | Helper | student-status-summary', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(() => {
    student = clone(studentFixture);
  });

  test('it renders with an active student', async function (assert) {
    this.set('student', student);

    await render(hbs`{{student-status-summary student}}`);

    assert.matches(this.element.textContent, /Senior/);
    assert.matches(this.element.textContent, /enrolled since Aug 2018/);
  });

  test('it renders with an inactive student', async function (assert) {
    student.attributes.dateInactive = '2019-07-01';
    student.attributes.districtGrade = 10;
    this.set('student', student);

    await render(hbs`{{student-status-summary student}}`);

    assert.matches(this.element.textContent, /Sophomore/);
    assert.matches(this.element.textContent, /enrolled Aug 2018-Jul 2019/);
  });
});
