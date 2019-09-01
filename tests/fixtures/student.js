// GET /api/students/108
export default {
  data: {
    id: '108',
    type: 'user',
    attributes: {
      firstName: 'Suzie',
      lastName: 'Schinner',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '7906630283',
      districtGrade: 12,
      status: 'active',
      role: 'student',
    },
    relationships: {
      coordinator: {
        data: {
          id: '104',
          type: 'staff',
        },
      },
    },
  },
};
