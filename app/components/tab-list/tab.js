import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'button',
  classNames: ['pure-button', 'tab-list-tab'],
  classNameBindings: ['isCurrent:current-tab-list-tab'],
  isCurrent: computed('currentTab', 'tab.name', function () {
    const { currentTab, tab } = this;

    return currentTab === tab.name;
  }),
  click() {
    this.setTab(this.tab.name, this.tab);
  },
});
