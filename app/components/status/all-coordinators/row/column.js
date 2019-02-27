import Component from '@ember/component';
import { bool } from '@ember/object/computed';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';

export default Component.extend({
  tagName: 'td',
  classNames: 'center',
  classNameBindings: ['showStatus:active', 'isIncomplete:incomplete'],
  showStatus: bool('entry'),
  entry: computed('coordinator', 'coordinatorsHash', 'month', function () {
    const { coordinator, coordinatorsHash, month } = this;

    return coordinatorsHash[coordinator.id][month];
  }),
  academicStatusName: computed('entry', function () {
    const { entry } = this;
    const remaining = entry.expectedCount - entry.actualCount;

    if (remaining === 0) {
      return 'Complete';
    }

    if (remaining > 0) {
      return 'Incomplete';
    }

    assert('There is a count mismatch bug here', true);

    return 'Error';
  }),

  statusAbbreviation: computed('academicStatusName', function () {
    return this.academicStatusName.substr(0, 1);
  }),


  isIncomplete: computed('showStatus', 'academicStatusName', function () {
    if (!this.showStatus) return false;

    return this.academicStatusName !== 'Complete';
  }),
});
