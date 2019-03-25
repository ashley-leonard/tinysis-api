// GET /api/staff
export default {
  data: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Trinh',
        lastName: 'Reilly',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
        email: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '5',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Scott',
        lastName: 'Rau',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
        email: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '6',
              type: 'student',
            },
            {
              id: '7',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '3',
      type: 'user',
      attributes: {
        firstName: 'Lewis',
        lastName: 'Brakus',
        nickname: null,
        dateActive: null,
        dateInactive: '2018-01-01',
        status: 'inactive',
        role: 'staff',
        email: null,
      },
      relationships: {
        coordinatees: {
          data: [

          ],
        },
      },
    },
    {
      id: '4',
      type: 'user',
      attributes: {
        firstName: 'Vinita',
        lastName: 'Keebler',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'administrator',
        email: null,
      },
      relationships: {
        coordinatees: {
          data: [

          ],
        },
      },
    },
  ],
  meta: {
    count: 4,
  },
};
