// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '158',
      type: 'user',
      attributes: {
        firstName: 'Mason',
        lastName: 'Bogan',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '1389427736',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '153',
            type: 'staff',
          },
        },
      },
    },
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
        status: 'active',
        role: 'staff',
        email: 'jackie@nicolas.info',
      },
      relationships: {
      },
    },
    {
      id: '154',
      type: 'user',
      attributes: {
        firstName: 'Cyrus',
        lastName: 'Mitchell',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'richard@ullrich.com',
      },
      relationships: {
      },
    },
    {
      id: '157',
      type: 'user',
      attributes: {
        firstName: 'Earl',
        lastName: 'Schoen',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '9727833377',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '153',
            type: 'staff',
          },
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
        status: 'active',
        role: 'staff',
        email: 'aron@heel.org',
      },
      relationships: {
      },
    },
    {
      id: '156',
      type: 'user',
      attributes: {
        firstName: 'Randell',
        lastName: 'Turner',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '7474755857',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '152',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '155',
      type: 'user',
      attributes: {
        firstName: 'Wiley',
        lastName: 'Wehner',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'collinhuel@paucekferry.io',
      },
      relationships: {
      },
    },
  ],
  included: [
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
        status: 'active',
        role: 'staff',
        email: 'aron@heel.org',
      },
      relationships: {
      },
    },
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
        status: 'active',
        role: 'staff',
        email: 'jackie@nicolas.info',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 7,
  },
};
