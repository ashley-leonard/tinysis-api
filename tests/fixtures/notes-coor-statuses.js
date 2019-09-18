// GET /api/notes?notableType=Status&notableIds=103,106,104,107,105,108
export default {
  data: [
    {
      id: '53',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for Baumbach on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '103',
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
      id: '54',
      type: 'note',
      attributes: {
        note: 'Note by Hartmann for Lowe on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '104',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '188',
            type: 'User',
          },
        },
      },
    },
    {
      id: '55',
      type: 'note',
      attributes: {
        note: 'Note by Hartmann for Durgan on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '105',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '188',
            type: 'User',
          },
        },
      },
    },
    {
      id: '56',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for Baumbach on 2019-10-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '106',
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
      id: '57',
      type: 'note',
      attributes: {
        note: 'Note by Hartmann for Lowe on 2019-10-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '107',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '188',
            type: 'User',
          },
        },
      },
    },
    {
      id: '58',
      type: 'note',
      attributes: {
        note: 'Note by Hartmann for Durgan on 2019-10-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '108',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '188',
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
    {
      id: '188',
      type: 'user',
      attributes: {
        firstName: 'Bo',
        lastName: 'Hartmann',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'marcelle@satterfield.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '192',
              type: 'user',
            },
            {
              id: '193',
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
