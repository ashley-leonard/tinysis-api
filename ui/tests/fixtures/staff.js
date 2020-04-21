// GET /api/staff
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
    {
      id: '9',
      type: 'user',
      attributes: {
        firstName: 'Lillie',
        lastName: 'Treutel',
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
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Antonio',
        lastName: 'Fahey',
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
      id: '10',
      type: 'user',
      attributes: {
        firstName: 'Cleotilde',
        lastName: 'Kohler',
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
    count: 5,
  },
};
