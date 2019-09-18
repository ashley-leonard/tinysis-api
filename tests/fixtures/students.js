// GET /api/students
export default {
  data: [
    {
      id: '191',
      type: 'user',
      attributes: {
        firstName: 'Wally',
        lastName: 'Baumbach',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '8257538751',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '187',
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
  ],
  meta: {
    count: 3,
  },
};
