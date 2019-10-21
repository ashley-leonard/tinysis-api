// GET /api/notes?notableType=Status&notableIds=61,62,63,70,71,72
export default {
  data: [
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Mayer for 2019-09-01 enrollment of Dietrich in Fugit repellat trans voluptatibus decens.',
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
            id: '241',
            type: 'User',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Mayer for 2019-10-01 enrollment of Dietrich in Fugit repellat trans voluptatibus decens.',
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
            id: '241',
            type: 'User',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Mayer for 2019-11-01 enrollment of Dietrich in Fugit repellat trans voluptatibus decens.',
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
            id: '241',
            type: 'User',
          },
        },
      },
    },
    {
      id: '16',
      type: 'note',
      attributes: {
        note: 'Note by Ritchie for 2019-09-01 enrollment of Dietrich in Vulgo coruscus crastinus omnis admitto.',
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
            id: '242',
            type: 'User',
          },
        },
      },
    },
    {
      id: '17',
      type: 'note',
      attributes: {
        note: 'Note by Ritchie for 2019-10-01 enrollment of Dietrich in Vulgo coruscus crastinus omnis admitto.',
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
            id: '242',
            type: 'User',
          },
        },
      },
    },
    {
      id: '18',
      type: 'note',
      attributes: {
        note: 'Note by Ritchie for 2019-11-01 enrollment of Dietrich in Vulgo coruscus crastinus omnis admitto.',
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
            id: '242',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '241',
      type: 'user',
      attributes: {
        firstName: 'Bong',
        lastName: 'Mayer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'kenakulas@pourotamm.com',
        status: 'active',
        role: 'staff',
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
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ethelkris@dicki.co',
        status: 'active',
        role: 'staff',
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
  ],
  meta: {
    count: 6,
  },
};
