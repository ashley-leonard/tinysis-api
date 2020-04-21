// GET /api/staff?status=active&coordinators=true&order=lastName,firstName
export default {
  data: [
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Dominic',
        lastName: 'Collier',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '11',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '8',
      type: 'user',
      attributes: {
        firstName: 'Weston',
        lastName: 'Rempel',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '12',
              type: 'user',
            },
            {
              id: '13',
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
