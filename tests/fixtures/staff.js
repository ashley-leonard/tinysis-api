export default {
  data: [
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
      id: '3',
      type: 'user',
      attributes: {
        firstName: 'Marshall',
        lastName: 'Heidenreich',
        nickname: null,
        dateActive: null,
        dateInactive: '2018-01-01',
        status: 'inactive',
        role: 'staff',
        email: null,
      },
      relationships: {
        coordinatees: {
          data: [

          ],
        },
      },
    },
  ],
  meta: {
    count: 3,
  },
};
