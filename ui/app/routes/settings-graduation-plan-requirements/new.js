import EditRoute from './edit';
import { createEntity } from '../../utils/json-api';

export default EditRoute.extend({
  model() {
    const data = createEntity('graduationPlanRequirement', {
      name: '',
      requirementType: 'credit',
    });

    return { data };
  },
});
