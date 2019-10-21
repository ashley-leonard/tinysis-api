// GET /api/students/245
export default {
  data: {
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
};
