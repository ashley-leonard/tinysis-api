// GET /api/notes?notableType=Status&notableIds=1,2,3,4,5,6,7,8,9
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
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Collier for 2019-09-01 enrollment of Pollich in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '4',
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
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Collier for 2019-10-01 enrollment of Pollich in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '5',
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
      id: '9',
      type: 'note',
      attributes: {
        note: 'Note by Collier for 2019-11-01 enrollment of Pollich in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '6',
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
      id: '10',
      type: 'note',
      attributes: {
        note: 'Note by Collier for 2019-09-01 enrollment of Yundt in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '7',
            type: 'User',
          },
        },
      },
    },
    {
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Collier for 2019-10-01 enrollment of Yundt in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '7',
            type: 'User',
          },
        },
      },
    },
    {
      id: '12',
      type: 'note',
      attributes: {
        note: 'Note by Collier for 2019-11-01 enrollment of Yundt in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '7',
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
  ],
  meta: {
    count: 9,
  },
};
