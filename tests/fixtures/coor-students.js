// GET /api/students?coordinatorIds=188&status=reportable&order=lastName,firstName
export default {
  data: [
    {
      id: '193',
      type: 'user',
      attributes: {
        firstName: 'Ramon',
        lastName: 'Durgan',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '7445503495',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '188',
            type: 'user',
          },
        },
      },
    },
    {
      id: '192',
      type: 'user',
      attributes: {
        firstName: 'Maura',
        lastName: 'Lowe',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4487389042',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '188',
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
