// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '98',
      type: 'user',
      attributes: {
        firstName: 'Adrian',
        lastName: 'Bahringer',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '1086617984',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '94',
            type: 'user',
          },
        },
      },
    },
    {
      id: '97',
      type: 'user',
      attributes: {
        firstName: 'Claretha',
        lastName: 'Gusikowski',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'domingowalter@walker.io',
      },
      relationships: {
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
        status: 'active',
        role: 'staff',
        email: 'destiny@kuhickunde.com',
      },
      relationships: {
      },
    },
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
        status: 'active',
        role: 'staff',
        email: 'joy@schimmelmacejkovic.com',
      },
      relationships: {
      },
    },
    {
      id: '99',
      type: 'user',
      attributes: {
        firstName: 'Connie',
        lastName: 'Kunze',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '8805060332',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '95',
            type: 'user',
          },
        },
      },
    },
    {
      id: '100',
      type: 'user',
      attributes: {
        firstName: 'Melita',
        lastName: 'Mann',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '5464249688',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '95',
            type: 'user',
          },
        },
      },
    },
    {
      id: '96',
      type: 'user',
      attributes: {
        firstName: 'Dorthy',
        lastName: "O'Conner",
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'evia@toy.com',
      },
      relationships: {
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
        status: 'active',
        role: 'staff',
        email: 'joy@schimmelmacejkovic.com',
      },
      relationships: {
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
        status: 'active',
        role: 'staff',
        email: 'destiny@kuhickunde.com',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 7,
  },
};
