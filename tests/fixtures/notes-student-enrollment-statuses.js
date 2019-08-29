// GET /api/notes?notableType=Status&notableIds=61,62,63,67,68,69
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
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Trantow for 2019-09-01 enrollment of Turner in Certe textor vir correptius aggredior.',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '153',
            type: 'User',
          },
        },
      },
    },
    {
      id: '12',
      type: 'note',
      attributes: {
        note: 'Note by Trantow for 2019-10-01 enrollment of Turner in Certe textor vir correptius aggredior.',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '153',
            type: 'User',
          },
        },
      },
    },
    {
      id: '13',
      type: 'note',
      attributes: {
        note: 'Note by Trantow for 2019-11-01 enrollment of Turner in Certe textor vir correptius aggredior.',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '153',
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
    {
      id: '153',
      type: 'user',
      attributes: {
        firstName: 'Tamie',
        lastName: 'Trantow',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'aron@heel.org',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '157',
              type: 'student',
            },
            {
              id: '158',
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
