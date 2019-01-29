export default {
  data: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Joanne',
        lastName: 'Dicki',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
        email: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '4',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Bella',
        lastName: 'Schowalter',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
        email: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '5',
              type: 'student',
            },
            {
              id: '6',
              type: 'student',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 2,
  },
};
