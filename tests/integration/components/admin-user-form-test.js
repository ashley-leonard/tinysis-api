import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  click,
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
});
