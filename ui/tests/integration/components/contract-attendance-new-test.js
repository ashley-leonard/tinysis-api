import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import dayjs from 'dayjs';
import hbs from 'htmlbars-inline-precompile';
import { clone } from '../../helpers/test-utils';
import contractAttendanceFixture from '../../fixtures/contract-attendance';

let actions;
let meetings;

module('Integration | Component | contract-attendance-new', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    actions = [];
    meetings = clone(contractAttendanceFixture.data);

    const meeting = meetings[meetings.length - 2];
    const today = dayjs(meeting.attributes.meetingDate, 'YYYY-MM-DD').add(1, 'day').toDate();
    this.setProperties({
      meetings,
      today,
      createMeeting(meetingDate) { actions.push({ meetingDate }); },
    });
  });

  test('it works', async (assert) => {
    await render(hbs`
      {{contract-attendance-new
        meetings=meetings
        today=today
        createMeeting=createMeeting
      }}
    `);

    assert.ok(find('t-contract-attendance-new'), 'container was rendered');

    const firstCalendarButton = find('td[data-day="1"] button[data-pika-year="2019"][data-pika-month="8"][data-pika-day="1"]');
    assert.ok(firstCalendarButton, 'calendar rendered with expected first day');

    meetings.forEach((meeting) => {
      const { meetingDate } = meeting.attributes;
      const day = dayjs(meetingDate, 'YYYY-MM-DD').date();
      const disabledMeetingButton = find(`td.is-disabled button[data-pika-year="2019"][data-pika-month="8"][data-pika-day="${day}"]`);
      assert.ok(disabledMeetingButton, `button for meeting day ${meetingDate} disabled as expected`);
    });

    assert.equal(actions.length, 0, 'no actions triggered as of yet');

    await click('button[data-pika-year="2019"][data-pika-month="8"][data-pika-day="16"]');
    await click('footer button');

    assert.equal(actions.length, 1, 'action triggered to create meeting');

    const [action] = actions;

    assert.equal(action.meetingDate, '2019-09-16', 'expected meeting date sent with action');
  });
});
