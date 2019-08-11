// GET /api/students/5
export default {
  data: {
    id: '5',
    type: 'user',
    attributes: {
      firstName: 'Zachery',
      lastName: 'Ratke',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '4824754434',
      districtGrade: 12,
      status: 'active',
      role: 'student',
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
