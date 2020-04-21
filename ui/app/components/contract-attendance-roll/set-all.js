import Component from '@ember/component';
import {
  participationOptions,
  contactTypeOptions,
} from '../../utils/meeting-utils';

export default Component.extend({
  tagName: '',
  participationOptions,
  contactTypeOptions,
  updateAllRolls() {},
  init(...args) {
    this._super(...args);
    const [contactTypeDefault] = contactTypeOptions;
    const [participationDefault] = participationOptions;

    this.setProperties({
      contactType: contactTypeDefault.value,
      participation: participationDefault.value,
    });
  },
  actions: {
    onSubmit() {
      const {
        participation,
        contactType,
      } = this;

      this.updateAllRolls(contactType, participation);
    },
  },
});
