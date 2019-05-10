// GET /api/staff
export default {
  data: [
    {
      id: '156',
      type: 'user',
      attributes: {
        firstName: 'Rory',
        lastName: 'Muller',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '160',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '157',
      type: 'user',
      attributes: {
        firstName: 'Richard',
        lastName: 'Kuhic',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '161',
              type: 'student',
            },
            {
              id: '162',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '158',
      type: 'user',
      attributes: {
        firstName: 'Tillie',
        lastName: 'Barrows',
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
      id: '159',
      type: 'user',
      attributes: {
        firstName: 'Franklyn',
        lastName: 'Muller',
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
