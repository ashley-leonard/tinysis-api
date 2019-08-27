// GET /api/notes?notableType=Status&notableIds=61,62,63,64,65,66
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for 2019-09-01 enrollment of Schimmel in Vado veritas tenetur aspicio volup.',
        updatedAt: '2019-08-27T04:01:08.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '61',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for 2019-10-01 enrollment of Schimmel in Vado veritas tenetur aspicio volup.',
        updatedAt: '2019-08-27T04:01:08.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '62',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for 2019-11-01 enrollment of Schimmel in Vado veritas tenetur aspicio volup.',
        updatedAt: '2019-08-27T04:01:08.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '63',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for 2019-09-01 enrollment of Gulgowski in Vado veritas tenetur aspicio volup.',
        updatedAt: '2019-08-27T04:01:08.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '64',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for 2019-10-01 enrollment of Gulgowski in Vado veritas tenetur aspicio volup.',
        updatedAt: '2019-08-27T04:01:08.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '65',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for 2019-11-01 enrollment of Gulgowski in Vado veritas tenetur aspicio volup.',
        updatedAt: '2019-08-27T04:01:08.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '66',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '180',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '180',
      type: 'user',
      attributes: {
        firstName: 'Karena',
        lastName: 'Jacobs',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ariezemlak@macejkovicwhite.com',
        status: 'active',
        role: 'staff',
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
  ],
  meta: {
    count: 6,
  },
};
