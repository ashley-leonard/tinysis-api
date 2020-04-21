import EditRoute from './edit';
import { createEntity } from '../../utils/json-api';

export default EditRoute.extend({
  model() {
    return {
      data: createEntity('term', {
        months: [],
        creditDate: new Date().toISOString().substr(0, 10),
        status: 'active',
        schoolYear: this.tinyData.getSchoolYear(),
      }),
    };
  },
});
