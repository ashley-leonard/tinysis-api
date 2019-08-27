// GET /api/students?status=reportable&order=lastName,firstName&limit=-1
export default {
  data: [
    {
      id: '186',
      type: 'user',
      attributes: {
        firstName: 'Jarrod',
        lastName: 'Gulgowski',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '3246089314',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '181',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '184',
      type: 'user',
      attributes: {
        firstName: 'Gerardo',
        lastName: 'Schimmel',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '5751521221',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '180',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '185',
      type: 'user',
      attributes: {
        firstName: 'Benjamin',
        lastName: 'Witting',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6122664377',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '181',
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
