// GET /api/admin/users/5
export default {
  data: {
    id: '5',
    type: 'user',
    attributes: {
      firstName: 'Marshall',
      lastName: 'Rohan',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '2732911327',
      districtGrade: 12,
      status: 'active',
      role: 'student',
      email: null,
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
};
