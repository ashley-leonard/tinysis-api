// GET /api/staff
export default {
  data: [
    {
      id: '104',
      type: 'user',
      attributes: {
        firstName: 'Celia',
        lastName: 'Mosciski',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '108',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '105',
      type: 'user',
      attributes: {
        firstName: 'Shane',
        lastName: 'Denesik',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '109',
              type: 'student',
            },
            {
              id: '110',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '106',
      type: 'user',
      attributes: {
        firstName: 'Raul',
        lastName: 'Schoen',
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
      id: '107',
      type: 'user',
      attributes: {
        firstName: 'Eileen',
        lastName: 'Wilkinson',
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
