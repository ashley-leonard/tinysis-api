// GET /api/students
export default {
  data: [
    {
      id: '156',
      type: 'user',
      attributes: {
        firstName: 'Randell',
        lastName: 'Turner',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '7474755857',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '152',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '157',
      type: 'user',
      attributes: {
        firstName: 'Earl',
        lastName: 'Schoen',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '9727833377',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '153',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '158',
      type: 'user',
      attributes: {
        firstName: 'Mason',
        lastName: 'Bogan',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '1389427736',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '153',
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
