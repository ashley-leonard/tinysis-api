// GET /api/students?status=reportable&order=lastName,firstName&limit=-1
export default {
  data: [
    {
      id: '245',
      type: 'user',
      attributes: {
        firstName: 'Lincoln',
        lastName: 'Dietrich',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '8450113509',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '241',
            type: 'user',
          },
        },
      },
    },
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
    count: 3,
  },
};
