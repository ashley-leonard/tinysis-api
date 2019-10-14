// GET /api/students/98
export default {
  data: {
    id: '98',
    type: 'user',
    attributes: {
      firstName: 'Adrian',
      lastName: 'Bahringer',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '1086617984',
      districtGrade: 12,
      status: 'active',
      role: 'student',
    },
    relationships: {
      coordinator: {
        data: {
          id: '94',
          type: 'user',
        },
      },
    },
  },
};
