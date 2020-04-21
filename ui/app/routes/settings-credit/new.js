import SettingsCreditEditRoute from './edit';
import { createEntity } from '../../utils/json-api';

export default SettingsCreditEditRoute.extend({
  model() {
    return {
      data: createEntity('credit', {
        status: 'active',
        courseType: 'course',
      }),
    };
  },
});
