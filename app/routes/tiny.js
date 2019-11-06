import Route from '@ember/routing/route';
import Promise from 'rsvp';
import { inject as service } from '@ember/service';
import fetch from '../utils/fetch';
import { doSigninRedirect } from '../utils/session-utils';

export default Route.extend({
  tinyData: service(),

  async beforeModel(transition) {
    const { tinyData } = this;

    try {
      const appProfile = await tinyData.fetch('/api/profile');

      const mergedProfile = { ...appProfile.data, meta: appProfile.meta };

      tinyData.setUser(mergedProfile);
    } catch (e) {
      const { intent } = transition;

      transition.abort();

      if (e.status === 401 || e.message === 'No session') {
        doSigninRedirect(intent.url);
        return;
      }

      throw e;
    }
  },

  model() {
    const { tinyData } = this;

    return Promise.all([
      tinyData.fetch('/api/settings'),
      fetch('/api/settings/years'),
    ]).then(([settings, years]) => {
      const currentYearSetting = settings.data.find(setting => setting.attributes.name === 'current_year');
      const reportingBaseMonthSetting = settings.data.find(setting => setting.attributes.name === 'reporting_base_month');

      tinyData.setSchoolYear(currentYearSetting.attributes.value);
      tinyData.setReportingBaseMonth(reportingBaseMonthSetting.attributes.value);
      tinyData.setYears(years);
    });
  },

  setupController(...args) {
    this._super(...args);

    const user = this.tinyData.getUser();

    this.controllerFor('application').setProperties({
      user,
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
