// GET /api/students/160
export default {
  data: {
    id: '160',
    type: 'user',
    attributes: {
      firstName: 'Abe',
      lastName: 'Brekke',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '4458178913',
      districtGrade: 12,
      isActive: true,
      role: 'student',
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
