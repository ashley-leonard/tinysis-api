// GET /api/admin/users/26
export default {
  data: {
    id: '26',
    type: 'user',
    attributes: {
      firstName: 'Eli',
      lastName: 'Monahan',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '3891854733',
      districtGrade: 12,
      status: 'active',
      role: 'student',
      email: null,
    },
    relationships: {
      coordinator: {
        data: {
          id: '22',
          type: 'user',
        },
      },
    },
  },
};
