/*
 * This component provides a simple visual X or - depending upon whether
 * the passed value matches the selection option. So it is similar
 * to a radio button. It also takes tab focus and handles keyboard input,
 * passing up any alphanumeric keystrokes to the caller via the optional
 * onkeydown handler. It can thus be used to implement an interface whereby
 * the user can use alpha keystrokes to select specific columns or controls.
 *
 *  {{value-button
 *    name="participation"
 *    selection=option.value
 *    value=meetingParticipant.attributes.participation
 *    onchange=(action "setParticipation" option.value)
 *    onkeydown=(action "setParticipationByKey" option.value)
 *  }}
 */

import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  onchange() {},
  onkeydown() {},

  isChecked: computed('value', 'optionValue', function () {
    const {
      value,
      optionValue,
    } = this;

    return value === optionValue;
  }),

  actions: {
    onKeyDown(event) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (!(/^[ \w]$/.test(event.key))) return;

      event.preventDefault();
      this.onkeydown(event.key, this.name);
    },

    onClick() {
      this.doOnChange();
    },
  },

  doOnChange() {
    this.get('onchange')(this.optionValue, this.name);
  },
});
