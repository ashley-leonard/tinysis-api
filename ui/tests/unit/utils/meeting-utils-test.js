import {
  PARTICIPATION_PRESENT,
  participationOptions,
  CONTACT_TYPE_CLASS,
  contactTypeOptions,
  attendanceDisplay,
  participationByKey,
} from 'tinysis-ui/utils/meeting-utils';
import { module, test } from 'qunit';

module('Unit | Utility | meeting-utils', () => {
  test('it yields participation options hash', (assert) => {
    const [present] = participationOptions;
    assert.equal(present.name, 'Present', 'participation options hash generated');
    assert.equal(present.value, PARTICIPATION_PRESENT, 'participation options hash generated');
  });

  test('it yields contact-type options hash', (assert) => {
    const [classContactType] = contactTypeOptions;
    assert.equal(classContactType.name, 'Class', 'contact type options hash generated');
    assert.equal(classContactType.value, CONTACT_TYPE_CLASS, 'contact type options hash generated');
  });

  test('it yields correct attendance display', (assert) => {
    const presentDisplay = attendanceDisplay({ attributes: { participation: 'present' } });
    assert.equal(presentDisplay, 'P', 'correct participation display for present');

    const absentDisplay = attendanceDisplay({ attributes: { participation: 'absent' } });
    assert.equal(absentDisplay, 'A', 'correct participation display for present');

    const nullDisplay = attendanceDisplay({ attributes: { participation: undefined } });
    assert.equal(nullDisplay, '-', 'correct participation display for present');

    const missingDisplay = attendanceDisplay();
    assert.equal(missingDisplay, '-', 'correct participation display for present');
  });

  test('it yields correct participation code for keystroke', (assert) => {
    const participation = participationByKey('p');

    assert.equal(participation, 'present', 'the letter p generates a present status');
  });
});
