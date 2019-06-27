// GET /api/students?coordinatorIds=2&status=reportable&order=lastName,firstName
export default {
  data: [
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Clifton',
        lastName: 'Jacobi',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6387659518',
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
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Stephane',
        lastName: 'Maggio',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '2351707665',
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
  ],
  meta: {
    count: 2,
  },
};
