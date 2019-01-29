import { academicStatusName, isUnacceptable } from 'tinysis-ui/utils/status-utils';
import { module, test } from 'qunit';
import coorStatusFixtures from '../../fixtures/coor-statuses';

const status = Object.assign({}, coorStatusFixtures.data[0]);

module('Unit | Utility | status-utils', () => {
  test('academicStatusName functions acceptably', (assert) => {
    const result = academicStatusName(status);

    assert.equal(0, status.attributes.academicStatus, 'fixture has expected acceptable status');

    assert.equal('Satisfactory', result, 'expected status name of Satisfactory');
  });

  test('isUnacceptable functions acceptably', (assert) => {
    const result = isUnacceptable(status);
    assert.notOk(result, 'expect an acceptable status');
  });
});
