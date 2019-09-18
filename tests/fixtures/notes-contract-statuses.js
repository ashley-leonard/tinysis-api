// GET /api/notes?notableType=Status&notableIds=61,62,63,64,65,66
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for 2019-09-01 enrollment of Baumbach in Non cena atque vindico vestrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for 2019-10-01 enrollment of Baumbach in Non cena atque vindico vestrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for 2019-11-01 enrollment of Baumbach in Non cena atque vindico vestrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for 2019-09-01 enrollment of Durgan in Non cena atque vindico vestrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for 2019-10-01 enrollment of Durgan in Non cena atque vindico vestrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for 2019-11-01 enrollment of Durgan in Non cena atque vindico vestrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '187',
      type: 'user',
      attributes: {
        firstName: 'Judson',
        lastName: 'Emmerich',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'hosea@kovacek.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '191',
              type: 'user',
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
