// GET /api/students?status=reportable&order=lastName,firstName&limit=-1
export default {
  data: [
    {
      id: '28',
      type: 'user',
      attributes: {
        firstName: 'Bonnie',
        lastName: 'Auer',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '4905452447',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '23',
            type: 'user',
          },
        },
      },
    },
    {
      id: '27',
      type: 'user',
      attributes: {
        firstName: 'Erica',
        lastName: 'Bechtelar',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '945359679',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '23',
            type: 'user',
          },
        },
      },
    },
    {
      id: '26',
      type: 'user',
      attributes: {
        firstName: 'Eli',
        lastName: 'Monahan',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '3891854733',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '22',
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
