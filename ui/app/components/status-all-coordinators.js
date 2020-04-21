import Component from '@ember/component';
import dayjs from 'dayjs';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';
import { wasActive } from 'tinysis-ui/utils/user-utils';

export default Component.extend({
  tinyData: service(),

  classNames: ['t-table', 't-table-bordered'],

  tagName: 'table',

  months: computed('term', function () {
    const { term } = this;
    const { months } = term.attributes;
    const today = this.tinyData.getToday();
    const lastDay = dayjs(today).endOf('month').format('YYYY-MM-DD');

    return months.filter(month => month < lastDay);
  }),

  // builds a data structure consisting of
  // - a hash of coordinators
  // - each of which points to a hash of active months
  // - each of which references an object summarizing expected vs. actual completed status reports.
  // for a given month, we expect to find a completed status for each student who was active during that month.
  //
  coordinatorsHash: computed('coordinators', 'students', 'months', 'statuses', function computedCoordinatorsHash() {
    const {
      coordinators, students, months, statuses, tinyData,
    } = this;

    // build the bones of the hash
    //
    const result = coordinators
      .data
      .reduce((memoC, coordinator) => {
        memoC[coordinator.id] = months.reduce((memoM, month) => {
          memoM[month] = {
            expectedCount: 0,
            actualCount: 0,
            students: [],
            statuses: [],
          };
          return memoM;
        }, {});
        return memoC;
      }, {});

    // fill in student-count expectations
    //
    students
      .data
      .forEach((student) => {
        const coordinatorHash = result[student.relationships.coordinator.data.id];

        // student may be assigned to an inactive coordinator
        //
        if (!coordinatorHash) {
          return;
        }

        months.forEach((month) => {
          if (wasActive(student, month)) {
            const monthEntry = coordinatorHash[month];
            monthEntry.expectedCount += 1;
            monthEntry.students.push(student);
          }
        });
      });

    // fill in status counts
    //
    statuses.data.forEach((status) => {
      // skip inactive student
      //
      const student = tinyData.get('user', status.relationships.statusable.data.id);
      assert('expected student', student);

      const coordinatorHash = result[student.relationships.coordinator.data.id];

      // student may be assigned to an inactive coordinator
      //
      if (!coordinatorHash) {
        return;
      }

      const monthEntry = coordinatorHash[status.attributes.month];

      // skip aggro future statuses
      //
      if (!monthEntry) return;

      // increment only if student was active
      // to match expectation above
      //
      if (student && wasActive(student, status.attributes.month)) {
        monthEntry.actualCount += 1;
        monthEntry.statuses.push(status);
      }
    });

    return result;
  }),
});
