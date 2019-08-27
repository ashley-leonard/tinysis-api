// GET /api/admin/users/184
export default {
  data: {
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
      email: null,
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
};
