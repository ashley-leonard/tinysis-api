// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '3',
      type: 'user',
      attributes: {
        firstName: 'Cecilia',
        lastName: 'Beahan',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'ilanarice@parker.net',
      },
      relationships: {
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Keven',
        lastName: 'Champlin',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'denis@macejkovic.com',
      },
      relationships: {
      },
    },
    {
      id: '4',
      type: 'user',
      attributes: {
        firstName: 'Miles',
        lastName: 'Flatley',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'angeline@mayertstiedemann.co',
      },
      relationships: {
      },
    },
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Clifton',
        lastName: 'Jacobi',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6387659518',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Stephane',
        lastName: 'Maggio',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '2351707665',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '5',
      type: 'user',
      attributes: {
        firstName: 'Marshall',
        lastName: 'Rohan',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '2732911327',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '1',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Donald',
        lastName: 'Stoltenberg',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'chase@hellerjohnson.info',
      },
      relationships: {
      },
    },
  ],
  included: [
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Keven',
        lastName: 'Champlin',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'denis@macejkovic.com',
      },
      relationships: {
      },
    },
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Donald',
        lastName: 'Stoltenberg',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'chase@hellerjohnson.info',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 7,
  },
};
