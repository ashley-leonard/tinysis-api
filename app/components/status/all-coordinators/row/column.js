import Component from '@ember/component';
import { bool, equal } from '@ember/object/computed';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';

export default Component.extend({
  tagName: 'td',
  classNames: 'center',
  classNameBindings: ['showStatus:active', 'isIncomplete:incomplete'],
  showStatus: bool('entry'),
  isIncomplete: equal('entryIsComplete', false),
  entry: computed('coordinator', 'coordinatorsHash', 'month', function () {
    const { coordinator, coordinatorsHash, month } = this;

    return coordinatorsHash[coordinator.id][month];
  }),

  entryIsComplete: computed('entry', function () {
    const { entry, showStatus } = this;

    if (!showStatus) return false;

    const remaining = entry.expectedCount - entry.actualCount;

    if (remaining === 0) {
      return true;
    }

    if (remaining > 0) {
      return false;
    }

    assert('There is a count mismatch bug here', true);

    return false;
  }),

  entryStatusText: computed('entryIsComplete', function () {
    const { entryIsComplete } = this;

    if (entryIsComplete) {
      return 'Complete';
    }

    return 'Incomplete';
  }),

  entryStatusAbbreviation: computed('entryStatusText', function () {
    return this.entryStatusText.substr(0, 1);
  }),

});
