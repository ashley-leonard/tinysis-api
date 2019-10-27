// GET /api/admin/users/11
export default {
  data: {
    id: '11',
    type: 'user',
    attributes: {
      firstName: 'Leatrice',
      lastName: 'Bednar',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '2870279804',
      districtGrade: 12,
      status: 'active',
      role: 'student',
      email: null,
    },
    relationships: {
      coordinator: {
        data: {
          id: '7',
          type: 'user',
        },
      },
    },
  },
};
