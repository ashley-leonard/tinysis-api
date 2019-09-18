// GET /api/admin/users/191
export default {
  data: {
    id: '191',
    type: 'user',
    attributes: {
      firstName: 'Wally',
      lastName: 'Baumbach',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '8257538751',
      districtGrade: 12,
      status: 'active',
      role: 'student',
      email: null,
    },
    relationships: {
      coordinator: {
        data: {
          id: '187',
          type: 'user',
        },
      },
    },
  },
};
