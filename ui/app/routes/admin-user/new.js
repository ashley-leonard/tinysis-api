import dayjs from 'dayjs';
import EditRoute from './edit';
import { createEntity } from '../../utils/json-api';

export default EditRoute.extend({
  model() {
    const data = createEntity('user', {
      dateActive: dayjs().format('YYYY-MM-DD'),
      dateInactive: null,
      status: 'active',
      role: '',
      canLogin: true,
    });

    return { data };
  },
});
