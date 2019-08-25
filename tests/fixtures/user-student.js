// GET /api/admin/users/5
export default {
  data: {
    id: '5',
    type: 'user',
    attributes: {
      firstName: 'Eliana',
      lastName: 'Pfannerstill',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '9816947609',
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
