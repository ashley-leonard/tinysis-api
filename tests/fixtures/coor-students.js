// GET /api/students?coordinatorIds=157&status=reportable&order=lastName,firstName
export default {
  data: [
    {
      id: '162',
      type: 'user',
      attributes: {
        firstName: 'Ria',
        lastName: 'Goodwin',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '3024504196',
        districtGrade: 12,
        isActive: false,
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '157',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '161',
      type: 'user',
      attributes: {
        firstName: 'Tinisha',
        lastName: 'Waters',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6534797625',
        districtGrade: 12,
        isActive: true,
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '157',
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
