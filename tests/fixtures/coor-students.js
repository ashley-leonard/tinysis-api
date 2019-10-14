// GET /api/students?coordinatorIds=95&status=reportable&order=lastName,firstName
export default {
  data: [
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
    count: 2,
  },
};
