export default {
  data: [
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Lulu',
        lastName: 'Rau',
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
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Kami',
        lastName: 'Watsica',
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
  ],
  meta: {
    count: 2,
  },
};
