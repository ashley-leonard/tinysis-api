// GET /api/notes?notableType=Status&notableIds=61,62,63,70,71,72
export default {
  data: [
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for 2019-09-01 enrollment of Bahringer in Animadverto totidem triduana decretum uberrime.',
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
            id: '94',
            type: 'User',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for 2019-10-01 enrollment of Bahringer in Animadverto totidem triduana decretum uberrime.',
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
            id: '94',
            type: 'User',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for 2019-11-01 enrollment of Bahringer in Animadverto totidem triduana decretum uberrime.',
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
            id: '94',
            type: 'User',
          },
        },
      },
    },
    {
      id: '16',
      type: 'note',
      attributes: {
        note: 'Note by Jast for 2019-09-01 enrollment of Bahringer in Aestivus ciminatio voluptas solitudo curatio.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '70',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '95',
            type: 'User',
          },
        },
      },
    },
    {
      id: '17',
      type: 'note',
      attributes: {
        note: 'Note by Jast for 2019-10-01 enrollment of Bahringer in Aestivus ciminatio voluptas solitudo curatio.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '71',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '95',
            type: 'User',
          },
        },
      },
    },
    {
      id: '18',
      type: 'note',
      attributes: {
        note: 'Note by Jast for 2019-11-01 enrollment of Bahringer in Aestivus ciminatio voluptas solitudo curatio.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '72',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '95',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '94',
      type: 'user',
      attributes: {
        firstName: 'Lou',
        lastName: 'Johnson',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'joy@schimmelmacejkovic.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '98',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '95',
      type: 'user',
      attributes: {
        firstName: 'Walton',
        lastName: 'Jast',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'destiny@kuhickunde.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '99',
              type: 'user',
            },
            {
              id: '100',
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
