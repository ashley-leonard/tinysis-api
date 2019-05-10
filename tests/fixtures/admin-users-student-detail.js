// GET /api/admin/users/160
export default {
  data: {
    id: '160',
    type: 'user',
    attributes: {
      firstName: 'Abe',
      lastName: 'Brekke',
      nickname: null,
      canLogin: false,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '4458178913',
      districtGrade: 12,
      isActive: true,
      role: 'student',
      login: 'pk6qoc4qh7ma',
      email: null,
    },
    relationships: {
      coordinator: {
        data: {
          id: '156',
          type: 'staff',
        },
      },
    },
  },
};
