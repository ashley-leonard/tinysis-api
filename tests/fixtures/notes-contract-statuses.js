// GET /api/notes?notableType=Status&notableIds=61,62,63,64,65,66
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for 2019-09-01 enrollment of Turner in Averto spiculum spoliatio aestus alter.',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for 2019-10-01 enrollment of Turner in Averto spiculum spoliatio aestus alter.',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for 2019-11-01 enrollment of Turner in Averto spiculum spoliatio aestus alter.',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for 2019-09-01 enrollment of Bogan in Averto spiculum spoliatio aestus alter.',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for 2019-10-01 enrollment of Bogan in Averto spiculum spoliatio aestus alter.',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for 2019-11-01 enrollment of Bogan in Averto spiculum spoliatio aestus alter.',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '152',
      type: 'user',
      attributes: {
        firstName: 'Frederick',
        lastName: 'Lehner',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'jackie@nicolas.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '156',
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
