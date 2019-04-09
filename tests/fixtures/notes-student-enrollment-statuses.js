// GET /api/notes?notableType=Status&notableIds=1,2,3,7,8,9
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note by Boyle for 2019-09-01 enrollment of Buckridge in Pel crapula venustas repellat tametsi.',
        updatedAt: '2019-04-09T04:38:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Boyle for 2019-10-01 enrollment of Buckridge in Pel crapula venustas repellat tametsi.',
        updatedAt: '2019-04-09T04:38:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Boyle for 2019-11-01 enrollment of Buckridge in Pel crapula venustas repellat tametsi.',
        updatedAt: '2019-04-09T04:38:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Moen for 2019-09-01 enrollment of Buckridge in Tepesco nobis beatae thema vos.',
        updatedAt: '2019-04-09T04:38:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '7',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
      },
    },
    {
      id: '12',
      type: 'note',
      attributes: {
        note: 'Note by Moen for 2019-10-01 enrollment of Buckridge in Tepesco nobis beatae thema vos.',
        updatedAt: '2019-04-09T04:38:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '8',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
      },
    },
    {
      id: '13',
      type: 'note',
      attributes: {
        note: 'Note by Moen for 2019-11-01 enrollment of Buckridge in Tepesco nobis beatae thema vos.',
        updatedAt: '2019-04-09T04:38:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '9',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Mark',
        lastName: 'Kuhn',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Scottie',
        lastName: 'Zieme',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 6,
  },
};
