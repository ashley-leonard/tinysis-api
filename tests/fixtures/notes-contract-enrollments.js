// GET /api/notes?notableType=Enrollment&notableIds=15,17,16
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Dietrich for enrollment in Fugit repellat trans voluptatibus decens.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '15',
            type: 'enrollment',
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
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Murphy for enrollment in Fugit repellat trans voluptatibus decens.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '16',
            type: 'enrollment',
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
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Kutch for enrollment in Fugit repellat trans voluptatibus decens.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '17',
            type: 'enrollment',
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
  ],
  meta: {
    count: 3,
  },
};
