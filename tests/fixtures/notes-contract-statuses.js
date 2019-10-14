// GET /api/notes?notableType=Status&notableIds=61,62,63,64,65,66,67,68,69
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
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for 2019-09-01 enrollment of Kunze in Animadverto totidem triduana decretum uberrime.',
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
            id: '94',
            type: 'User',
          },
        },
      },
    },
    {
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for 2019-10-01 enrollment of Kunze in Animadverto totidem triduana decretum uberrime.',
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
            id: '94',
            type: 'User',
          },
        },
      },
    },
    {
      id: '9',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for 2019-11-01 enrollment of Kunze in Animadverto totidem triduana decretum uberrime.',
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
            id: '94',
            type: 'User',
          },
        },
      },
    },
    {
      id: '10',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for 2019-09-01 enrollment of Mann in Animadverto totidem triduana decretum uberrime.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '67',
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
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for 2019-10-01 enrollment of Mann in Animadverto totidem triduana decretum uberrime.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '68',
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
      id: '12',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for 2019-11-01 enrollment of Mann in Animadverto totidem triduana decretum uberrime.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '69',
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
  ],
  meta: {
    count: 9,
  },
};
