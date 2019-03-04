export default {
  data: [
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Nicki',
        lastName: 'Boyle',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        status: 'inactive',
        role: 'student',
        districtId: null,
        districtGrade: 12,
        coordinatorId: '2',
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'coordinator',
          },
        },
      },
    },
    {
      id: '5',
      type: 'user',
      attributes: {
        firstName: 'Alexandra',
        lastName: "O'Keefe",
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        status: 'active',
        role: 'student',
        districtId: null,
        districtGrade: 12,
        coordinatorId: '2',
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'coordinator',
          },
        },
      },
    },
    {
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
  ],
  meta: {
    count: 3,
  },
};
