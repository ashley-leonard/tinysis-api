// GET /api/students?coordinatorIds=2&status=reportable&order=lastName,firstName
export default {
  data: [
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Winston',
        lastName: 'Simonis',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '9798983283',
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
        firstName: 'Khalilah',
        lastName: 'Strosin',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4232569079',
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
