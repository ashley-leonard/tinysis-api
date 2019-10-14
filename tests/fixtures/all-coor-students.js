// GET /api/students?status=reportable&order=lastName,firstName&limit=-1
export default {
  data: [
    {
      id: '98',
      type: 'user',
      attributes: {
        firstName: 'Adrian',
        lastName: 'Bahringer',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '1086617984',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '94',
            type: 'user',
          },
        },
      },
    },
    {
      id: '99',
      type: 'user',
      attributes: {
        firstName: 'Connie',
        lastName: 'Kunze',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '8805060332',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '95',
            type: 'user',
          },
        },
      },
    },
    {
      id: '100',
      type: 'user',
      attributes: {
        firstName: 'Melita',
        lastName: 'Mann',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '5464249688',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '95',
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
