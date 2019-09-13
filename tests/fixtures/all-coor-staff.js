// GET /api/staff?status=active&coordinators=true&order=lastName,firstName
export default {
  data: [
    {
      id: '23',
      type: 'user',
      attributes: {
        firstName: 'Theo',
        lastName: 'Cruickshank',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '27',
              type: 'user',
            },
            {
              id: '28',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '22',
      type: 'user',
      attributes: {
        firstName: 'Hoyt',
        lastName: 'Sauer',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '26',
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
