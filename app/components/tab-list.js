import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: ['pure-button-group', 'tab-list'],
  attributeBindings: ['role', 'ariaLabel:aria-label'],
  ariaLabel: 'tabs',
  role: 'group',
  actions: {
    setTab(tabname, tab) {
      const action = this.onclick;
      this.set('currentTab', tabname);
      action(tabname, tab);
    },
  },
});
