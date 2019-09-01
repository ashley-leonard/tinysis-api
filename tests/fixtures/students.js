// GET /api/students
export default {
  data: [
    {
      id: '108',
      type: 'user',
      attributes: {
        firstName: 'Suzie',
        lastName: 'Schinner',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '7906630283',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '104',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '109',
      type: 'user',
      attributes: {
        firstName: 'Winter',
        lastName: 'Aufderhar',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6980910627',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '105',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '110',
      type: 'user',
      attributes: {
        firstName: 'Velma',
        lastName: 'Medhurst',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '8637686549',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '105',
            type: 'staff',
          },
        },
      },
    },
  ],
  meta: {
    count: 3,
  },
};
