// GET /api/staff
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
    {
      id: '243',
      type: 'user',
      attributes: {
        firstName: 'Willian',
        lastName: 'Windler',
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
      id: '240',
      type: 'user',
      attributes: {
        firstName: 'Fredric',
        lastName: 'Veum',
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
      id: '244',
      type: 'user',
      attributes: {
        firstName: 'Scotty',
        lastName: 'Mohr',
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
