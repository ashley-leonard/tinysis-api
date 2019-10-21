// GET /api/staff?status=active&coordinators=true&order=lastName,firstName
export default {
  data: [
    {
      id: '241',
      type: 'user',
      attributes: {
        firstName: 'Bong',
        lastName: 'Mayer',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '245',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '242',
      type: 'user',
      attributes: {
        firstName: 'Hector',
        lastName: 'Ritchie',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '246',
              type: 'user',
            },
            {
              id: '247',
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
