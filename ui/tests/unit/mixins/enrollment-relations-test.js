import EmberObject from '@ember/object';
import EnrollmentRelationsMixin from 'tinysis-ui/mixins/enrollment-relations';
import { module, test } from 'qunit';

import { buildTinyData } from '../../helpers/stub-tiny-data';
import contractDetailFixture from '../../fixtures/contract-detail';
import enrollmentDetailFixture from '../../fixtures/contract-enrollment-detail';

let tinyDataServiceMock;
let enrollment;

module('Unit | Mixin | enrollment-relations', (hooks) => {
  hooks.beforeEach(() => {
    tinyDataServiceMock = buildTinyData();

    // this is called on init by the service
    tinyDataServiceMock._init();

    tinyDataServiceMock.addResult(contractDetailFixture);
    tinyDataServiceMock.addResult(enrollmentDetailFixture);

    enrollment = tinyDataServiceMock.get('enrollment', enrollmentDetailFixture.data.id);
  });

  test('it can be mixed into an object', (assert) => {
    const EnrollmentRelationsObject = EmberObject.extend(EnrollmentRelationsMixin);
    const subject = EnrollmentRelationsObject.create({
      enrollment,
      tinyData: tinyDataServiceMock,
    });
    assert.ok(subject);
  });

  test('it can retrieve relations', (assert) => {
    const EnrollmentRelationsObject = EmberObject.extend(EnrollmentRelationsMixin);
    const subject = EnrollmentRelationsObject.create({
      enrollment,
      tinyData: tinyDataServiceMock,
    });

    ['participant', 'creditAssignments', 'turnins', 'meetingParticipants'].forEach((relation) => {
      const relationResult = subject.get(relation);
      assert.ok(relationResult, `relation ${relation} is retrievable and truthy`);
    });
  });
});
