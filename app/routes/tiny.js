import Route from '@ember/routing/route';
import Promise from 'rsvp';
import { inject as service } from '@ember/service';
import fetch from '../utils/fetch';

export default Route.extend({
  tinyData: service(),

  model() {
    return Promise.all([
      this.tinyData.fetch('/api/settings'),
      this.tinyData.fetch('/api/profile'),
      fetch('/api/settings/years'),
    ]).then(([settings, profile, years]) => {
      const currentYearSetting = settings.data.find(setting => setting.attributes.name === 'current_year');
      const reportingBaseMonthSetting = settings.data.find(setting => setting.attributes.name === 'reporting_base_month');

      this.tinyData.setSchoolYear(currentYearSetting.attributes.value);
      this.tinyData.setReportingBaseMonth(reportingBaseMonthSetting.attributes.value);
      this.tinyData.setUser(profile.data);
      this.tinyData.setYears(years);
    });
  },

  setupController(...args) {
    this._super(...args);
    this.controllerFor('application').setProperties({
      user: this.tinyData.getUser(),
      disableToolbar: false,
    });
  },

  actions: {
    getNotes(notables) {
      const [firstNotable] = notables;
      if (!firstNotable) return Promise.resolve({ data: [], meta: { count: 0 } });

      const notableType = firstNotable.type;
      const notableIds = notables.map(notable => notable.id);
      return this.tinyData.fetch('/api/notes', {
        params: {
          notableType,
          notableIds: notableIds.join(','),
        },
      });
    },
  },
});
