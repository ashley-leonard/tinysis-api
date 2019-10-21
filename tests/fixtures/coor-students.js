// GET /api/students?coordinatorIds=242&status=reportable&order=lastName,firstName
export default {
  data: [
    {
      id: '247',
      type: 'user',
      attributes: {
        firstName: 'Tula',
        lastName: 'Kutch',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '6781975177',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '242',
            type: 'user',
          },
        },
      },
    },
    {
      id: '246',
      type: 'user',
      attributes: {
        firstName: 'Latia',
        lastName: 'Murphy',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '9143987714',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '242',
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
