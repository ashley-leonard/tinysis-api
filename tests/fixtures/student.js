// GET /api/students/156
export default {
  data: {
    id: '156',
    type: 'user',
    attributes: {
      firstName: 'Randell',
      lastName: 'Turner',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '7474755857',
      districtGrade: 12,
      status: 'active',
      role: 'student',
    },
    relationships: {
      coordinator: {
        data: {
          id: '152',
          type: 'staff',
        },
      },
    },
  },
};
