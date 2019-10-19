import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { resolve, reject } from 'rsvp';
import Validator from '../utils/validator';
import { summarizeValidationError } from '../utils/response-utils';

export default Controller.extend({
  tinyData: service(),
  flashMessages: service(),

  validator: computed(() => new Validator({
    current_year: [{
      type: 'required',
    }],
    reporting_base_month: [{
      type: 'required',
    }],
    reporting_end_month: [{
      type: 'required',
    }],
    new_contract_term_default: [{
      type: 'required',
    }],
  })),
  settingsModel: computed('settings', function () {
    const attributes = this.settings.reduce((memo, setting) => {
      memo[setting.attributes.name] = setting.attributes.value;
      return memo;
    }, {});

    return { attributes };
  }),
  yearOptions: computed('current_year', function () {
    const { currentYear } = this;
    const yearOptions = [];
    for (let i = currentYear - 4; i < currentYear + 5; i += 1) {
      yearOptions.push(i.toString());
    }
    return yearOptions;
  }),
  monthOptions: computed(() => [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ].map((month, i) => ({
    name: month,
    value: (i + 1).toString(),
  }))),
  actions: {
    async save(data) {
      try {
        await this.tinyData.fetch('/api/admin/settings', {
          method: 'PUT',
          body: JSON.stringify({ data }),
        });

        this.flashMessages.info('Settings updates completed');
        this.transitionToRoute('admin-settings.index');
        return resolve();
      } catch (e) {
        this.flashMessages.alert(summarizeValidationError(e));
        return reject(e);
      }
    },
    reportError() {
      this.flashMessages.alert('Please check the values and correct any errors');
    },
  },
});
