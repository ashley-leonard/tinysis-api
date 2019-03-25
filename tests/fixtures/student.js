// GET /api/students/5
export default {
  data: {
    id: '5',
    type: 'user',
    attributes: {
      firstName: 'Haydee',
      lastName: 'Welch',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      status: 'active',
      role: 'student',
      districtId: null,
      districtGrade: 12,
      coordinatorId: '1',
    },
    relationships: {
      coordinator: {
        data: {
          id: '1',
          type: 'coordinator',
        },
      },
    },
  },
};
