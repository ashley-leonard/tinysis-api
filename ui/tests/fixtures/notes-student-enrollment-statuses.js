// GET /api/notes?notableType=Status&notableIds=1,2,3,10,11,12
export default {
  data: [
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Collier for 2019-09-01 enrollment of Bednar in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '7',
            type: 'User',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Collier for 2019-10-01 enrollment of Bednar in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '7',
            type: 'User',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Collier for 2019-11-01 enrollment of Bednar in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '7',
            type: 'User',
          },
        },
      },
    },
    {
      id: '16',
      type: 'note',
      attributes: {
        note: 'Note by Rempel for 2019-09-01 enrollment of Bednar in Tenus iusto coadunatio vicinus deorsum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '10',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '8',
            type: 'User',
          },
        },
      },
    },
    {
      id: '17',
      type: 'note',
      attributes: {
        note: 'Note by Rempel for 2019-10-01 enrollment of Bednar in Tenus iusto coadunatio vicinus deorsum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '11',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '8',
            type: 'User',
          },
        },
      },
    },
    {
      id: '18',
      type: 'note',
      attributes: {
        note: 'Note by Rempel for 2019-11-01 enrollment of Bednar in Tenus iusto coadunatio vicinus deorsum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '12',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '8',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Dominic',
        lastName: 'Collier',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'janelle@rathskiles.net',
        status: 'active',
        role: 'staff',
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
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'judsonparker@upton.info',
        status: 'active',
        role: 'staff',
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
  ],
  meta: {
    count: 6,
  },
};
