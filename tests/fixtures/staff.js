// GET /api/staff
export default {
  data: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Crista',
        lastName: 'Hansen',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '5',
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
        firstName: 'Garry',
        lastName: 'Terry',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '6',
              type: 'student',
            },
            {
              id: '7',
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
        firstName: 'Herman',
        lastName: 'Hickle',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [

          ],
        },
      },
    },
    {
      id: '4',
      type: 'user',
      attributes: {
        firstName: 'Cletus',
        lastName: 'Brekke',
        nickname: null,
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
    count: 4,
  },
};
