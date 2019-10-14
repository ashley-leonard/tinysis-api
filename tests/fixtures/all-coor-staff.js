// GET /api/staff?status=active&coordinators=true&order=lastName,firstName
export default {
  data: [
    {
      id: '95',
      type: 'user',
      attributes: {
        firstName: 'Walton',
        lastName: 'Jast',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '99',
              type: 'user',
            },
            {
              id: '100',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '94',
      type: 'user',
      attributes: {
        firstName: 'Lou',
        lastName: 'Johnson',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '98',
              type: 'user',
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
