// GET /api/students?coordinatorIds=8&status=reportable&order=lastName,firstName
export default {
  data: [
    {
      id: '12',
      type: 'user',
      attributes: {
        firstName: 'Garry',
        lastName: 'Pollich',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '1780983772',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '8',
            type: 'user',
          },
        },
      },
    },
    {
      id: '13',
      type: 'user',
      attributes: {
        firstName: 'Bernice',
        lastName: 'Yundt',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '5621269128',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '8',
            type: 'user',
          },
        },
      },
    },
  ],
  meta: {
    count: 2,
  },
};
