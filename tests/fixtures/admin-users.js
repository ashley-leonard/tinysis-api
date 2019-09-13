// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '28',
      type: 'user',
      attributes: {
        firstName: 'Bonnie',
        lastName: 'Auer',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '4905452447',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '23',
            type: 'user',
          },
        },
      },
    },
    {
      id: '27',
      type: 'user',
      attributes: {
        firstName: 'Erica',
        lastName: 'Bechtelar',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '945359679',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '23',
            type: 'user',
          },
        },
      },
    },
    {
      id: '23',
      type: 'user',
      attributes: {
        firstName: 'Theo',
        lastName: 'Cruickshank',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'leeanna@torp.net',
      },
      relationships: {
      },
    },
    {
      id: '24',
      type: 'user',
      attributes: {
        firstName: 'Gregorio',
        lastName: 'Daniel',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'marchuels@ohara.org',
      },
      relationships: {
      },
    },
    {
      id: '25',
      type: 'user',
      attributes: {
        firstName: 'Jarrett',
        lastName: 'Kuphal',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'pamelia@blanda.biz',
      },
      relationships: {
      },
    },
    {
      id: '26',
      type: 'user',
      attributes: {
        firstName: 'Eli',
        lastName: 'Monahan',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '3891854733',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '22',
            type: 'user',
          },
        },
      },
    },
    {
      id: '22',
      type: 'user',
      attributes: {
        firstName: 'Hoyt',
        lastName: 'Sauer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'serita@bartoletti.net',
      },
      relationships: {
      },
    },
  ],
  included: [
    {
      id: '23',
      type: 'user',
      attributes: {
        firstName: 'Theo',
        lastName: 'Cruickshank',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'leeanna@torp.net',
      },
      relationships: {
      },
    },
    {
      id: '22',
      type: 'user',
      attributes: {
        firstName: 'Hoyt',
        lastName: 'Sauer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'serita@bartoletti.net',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 7,
  },
};
