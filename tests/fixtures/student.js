export default {
  data: {
    id: '4',
    type: 'user',
    attributes: {
      firstName: 'Velva',
      lastName: 'Okuneva',
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
