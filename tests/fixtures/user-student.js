// GET /api/admin/users/5
export default {
  data: {
    id: '5',
    type: 'user',
    attributes: {
      firstName: 'Branden',
      lastName: 'Torp',
      nickname: null,
      canLogin: false,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '5072288102',
      districtGrade: 12,
      isActive: true,
      role: 'student',
      login: 'hy23ltt2fpad',
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
