import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  click,
  fillIn,
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import userStaff from '../../fixtures/user-staff';
import userStudent from '../../fixtures/user-student';
import userAdmin from '../../fixtures/user-admin';

let staff;
let admin;
let student;
let tinyData;
let requests;

module('Integration | Component | admin-user-form', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(userStaff);
    tinyData.addResult(userStudent);
    tinyData.addResult(userAdmin);

    staff = tinyData.get('user', userStaff.data.id);
    student = tinyData.get('user', userStudent.data.id);
    admin = tinyData.get('user', userAdmin.data.id);

    requests = [];

    this.setProperties({
      staff,
      student,
      admin,
      allStaff: [staff, admin],
      saveUser(pojo) {
        requests.push({ type: 'save', pojo });
        return resolve({ data: pojo });
      },
      reportError() {
        requests.push({ type: 'error' });
      },
    });
  });

  test('it renders student', async (assert) => {
    await render(hbs`
      {{admin-user-form
        staff=allStaff
        model=student
        save=saveUser
        reportError=reportError
      }}
    `);

    await click('button');

    assert.equal(requests.length, 1, 'Can successfully resubmit a valid model');

    const [payload] = requests;

    assert.deepEqual(payload.pojo, student, 'round trip object should be a full clone');
    assert.notEqual(payload.pojo, student, 'round trip object is not the same object as the original');
  });

  test('it renders staff member', async (assert) => {
    await render(hbs`
      {{admin-user-form
        staff=allStaff
        model=staff
        save=saveUser
        reportError=reportError
      }}
    `);

    await click('button');

    assert.equal(requests.length, 1, 'Can successfully resubmit a valid model');

    const [payload] = requests;

    assert.deepEqual(payload.pojo, staff, 'round trip object should be a full clone');
    assert.notEqual(payload.pojo, staff, 'round trip object is not the same object as the original');
  });

  test('it renders admin', async (assert) => {
    await render(hbs`
      {{admin-user-form
        staff=allStaff
        model=admin
        save=saveUser
        reportError=reportError
      }}
    `);

    await click('button');

    assert.equal(requests.length, 1, 'Can successfully resubmit a valid model');

    const [payload] = requests;

    assert.deepEqual(payload.pojo, admin, 'round trip object should be a full clone');
    assert.notEqual(payload.pojo, admin, 'round trip object is not the same object as the original');
  });

  test('it refuses to submit an invalid user', async function (assert) {
    const noName = this.get('student');
    noName.attributes.lastName = null;
    noName.attributes.firstName = null;
    this.set('noName', noName);

    await render(hbs`
      {{admin-user-form
        staff=allStaff
        model=noName
        save=saveUser
        reportError=reportError
      }}
    `);

    await click('button');

    assert.equal(requests.length, 1, 'Submitted one callback');

    const [payload] = requests;

    assert.deepEqual(payload.type, 'error', 'send an error callback');
  });

  test('it renders admin and handles edits', async (assert) => {
    await render(hbs`
      {{admin-user-form
        staff=allStaff
        model=admin
        save=saveUser
        reportError=reportError
      }}
    `);

    await fillIn('input[name="firstName"]', 'Sally');
    await fillIn('input[name="lastName"]', 'Forth');
    await fillIn('input[name="nickname"]', 'SallyForth');

    await click('button');

    assert.equal(requests.length, 1, 'Can successfully submit a valid model');

    let success = requests.pop();

    assert.matches(success.pojo.attributes.firstName, 'Sally');
    assert.matches(success.pojo.attributes.lastName, 'Forth');
    assert.matches(success.pojo.attributes.nickname, 'SallyForth');

    await fillIn('[name="dateInactive"]', '10/19/2019');

    await click('button');

    const err = requests.pop();

    assert.ok(err);
    assert.equal(err.type, 'error', 'error reported');

    await click('[name="status"][value="inactive"]');
    await click('button');

    success = requests.pop();
    assert.ok(success);
    assert.equal(success.type, 'save', 'success reported with status set properly');

    assert.matches(success.pojo.attributes.dateInactive, '2019-10-19');
    assert.matches(success.pojo.attributes.status, 'inactive');
  });
});
