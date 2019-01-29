import Route from '@ember/routing/route';
import Promise from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  model() {
    return Promise.all([
      this.tinyData.fetch('/api/settings'),
      this.tinyData.fetch('/api/profile'),
    ]).then(([settings, profile]) => {
      const currentYearSetting = settings.data.find(setting => setting.attributes.name === 'current_year');
      this.tinyData.setSchoolYear(currentYearSetting.attributes.value);
      this.tinyData.setUser(profile.data);
    });
  },

  actions: {
    getNotes(notables) {
      const [firstNotable] = notables.data;
      if (!firstNotable) return Promise.resolve({ data: [], meta: { count: 0 } });

      const notableType = firstNotable.type;
      const notableIds = notables.data.map(notable => notable.id);
      return this.tinyData.fetch('/api/notes', {
        params: {
          notableType,
          notableIds: notableIds.join(','),
        },
      });
    },
  },
});
