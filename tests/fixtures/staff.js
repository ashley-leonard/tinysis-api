// GET /api/staff
export default {
  data: [
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
      id: '24',
      type: 'user',
      attributes: {
        firstName: 'Gregorio',
        lastName: 'Daniel',
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
      id: '25',
      type: 'user',
      attributes: {
        firstName: 'Jarrett',
        lastName: 'Kuphal',
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
