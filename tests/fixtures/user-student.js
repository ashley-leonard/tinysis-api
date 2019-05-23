// GET /api/admin/users/5
export default {
  data: {
    id: '5',
    type: 'user',
    attributes: {
      firstName: 'Fay',
      lastName: 'Satterfield',
      nickname: null,
      canLogin: false,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '6661257082',
      districtGrade: 12,
      status: 'active',
      role: 'student',
      login: 'mii914bvjivx',
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
