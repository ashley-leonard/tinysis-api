import dayjs from 'dayjs';
import EditRoute from './edit';

export default EditRoute.extend({
  model() {
    return {
      data: {
        attributes: {
          dateActive: dayjs().format('YYYY-MM-DD'),
          dateInactive: null,
          status: 'active',
          role: '',
          canLogin: true,
        },
      },
    };
  },
});
