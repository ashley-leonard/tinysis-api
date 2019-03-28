// GET /api/notes?notableType=Status&notableIds=43,46,44,47,45,48
export default {
  data: [
    {
      id: '51',
      type: 'note',
      attributes: {
        note: 'Note by Bauch for Greenholt on 2019-09-01',
        updatedAt: '2019-03-27T15:15:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '43',
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
      id: '52',
      type: 'note',
      attributes: {
        note: 'Note by Wiza for Russel on 2019-09-01',
        updatedAt: '2019-03-27T15:15:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '44',
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
      id: '53',
      type: 'note',
      attributes: {
        note: 'Note by Wiza for Mills on 2019-09-01',
        updatedAt: '2019-03-27T15:15:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '45',
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
      id: '54',
      type: 'note',
      attributes: {
        note: 'Note by Bauch for Greenholt on 2019-10-01',
        updatedAt: '2019-03-27T15:15:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '46',
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
      id: '55',
      type: 'note',
      attributes: {
        note: 'Note by Wiza for Russel on 2019-10-01',
        updatedAt: '2019-03-27T15:15:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '47',
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
      id: '56',
      type: 'note',
      attributes: {
        note: 'Note by Wiza for Mills on 2019-10-01',
        updatedAt: '2019-03-27T15:15:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '48',
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
