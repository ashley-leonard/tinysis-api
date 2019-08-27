// GET /api/staff
export default {
  data: [
    {
      id: '180',
      type: 'user',
      attributes: {
        firstName: 'Karena',
        lastName: 'Jacobs',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '184',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '181',
      type: 'user',
      attributes: {
        firstName: 'Carita',
        lastName: 'Cremin',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '185',
              type: 'student',
            },
            {
              id: '186',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '182',
      type: 'user',
      attributes: {
        firstName: 'Margeret',
        lastName: 'Kub',
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
      id: '183',
      type: 'user',
      attributes: {
        firstName: 'Nestor',
        lastName: 'Jacobi',
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
