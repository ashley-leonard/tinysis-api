export default {
  data: [
    {
      id: '5',
      type: 'user',
      attributes: {
        firstName: 'Emile',
        lastName: 'Hane',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        status: 'active',
        role: 'student',
        districtId: null,
        districtGrade: null,
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
        firstName: 'Norris',
        lastName: 'Kemmer',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        status: 'active',
        role: 'student',
        districtId: null,
        districtGrade: null,
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
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Hilma',
        lastName: 'Strosin',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        status: 'inactive',
        role: 'student',
        districtId: null,
        districtGrade: null,
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
  ],
  meta: {
    count: 3,
  },
};
