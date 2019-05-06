// GET /api/admin/users/5
export default {
  data: {
    id: '5',
    type: 'user',
    attributes: {
      firstName: 'Sherilyn',
      lastName: 'Gislason',
      nickname: null,
      canLogin: false,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '1564901313',
      districtGrade: 12,
      isActive: true,
      role: 'student',
      login: 'vpfzmxp37foz',
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
