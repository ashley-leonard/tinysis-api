// GET /api/staff?status=active&coordinators=true&order=lastName,firstName
export default {
  data: [
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
  ],
  meta: {
    count: 2,
  },
};
