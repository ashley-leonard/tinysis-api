// GET /api/students?coordinatorIds=2&status=reportable&order=lastName,firstName
export default {
  data: [
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Adaline',
        lastName: 'Jenkins',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '9104205690',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Selina',
        lastName: 'Mraz',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '5119413527',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'staff',
          },
        },
      },
    },
  ],
  meta: {
    count: 2,
  },
};
