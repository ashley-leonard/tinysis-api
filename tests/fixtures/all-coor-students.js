// GET /api/students?status=reportable&order=lastName,firstName&limit=-1
export default {
  data: [
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Oswaldo',
        lastName: 'Bartoletti',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '5571345198',
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
        firstName: 'Zetta',
        lastName: 'Blanda',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '2333436592',
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
      id: '5',
      type: 'user',
      attributes: {
        firstName: 'Zachery',
        lastName: 'Ratke',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4824754434',
        districtGrade: 12,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '1',
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
