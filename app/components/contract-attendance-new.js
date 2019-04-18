import Component from '@ember/component';
import { computed } from '@ember/object';
import dayjs from 'dayjs';

export default Component.extend({
  tagName: '',

  createMeeting() {},

  meetingHash: computed('meetings', function () {
    return this.meetings
      .reduce((memo, meeting) => {
        memo[meeting.attributes.meetingDate] = meeting;
        return memo;
      }, {});
  }),

  didReceiveAttrs() {
    this.set('selectedDate', this.today);
  },

  actions: {
    onChangeDate(value) {
      this.set('selectedDate', value);
    },

    createMeeting(meetingDate) {
      this.set('disabled', true);
      return this.createMeeting(meetingDate);
    },

    disableCurrentMeetings(date) {
      const dateStr = dayjs(date).format('YYYY-MM-DD');
      return Boolean(this.meetingHash[dateStr]);
    },
  },
});
