// GET /api/staff
export default {
  data: [
    {
      id: '152',
      type: 'user',
      attributes: {
        firstName: 'Frederick',
        lastName: 'Lehner',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '156',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '153',
      type: 'user',
      attributes: {
        firstName: 'Tamie',
        lastName: 'Trantow',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '157',
              type: 'student',
            },
            {
              id: '158',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '154',
      type: 'user',
      attributes: {
        firstName: 'Cyrus',
        lastName: 'Mitchell',
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
      id: '155',
      type: 'user',
      attributes: {
        firstName: 'Wiley',
        lastName: 'Wehner',
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
