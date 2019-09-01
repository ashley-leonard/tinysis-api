// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '109',
      type: 'user',
      attributes: {
        firstName: 'Winter',
        lastName: 'Aufderhar',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6980910627',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '105',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '105',
      type: 'user',
      attributes: {
        firstName: 'Shane',
        lastName: 'Denesik',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'linwoodoconner@breitenberg.io',
      },
      relationships: {
      },
    },
    {
      id: '110',
      type: 'user',
      attributes: {
        firstName: 'Velma',
        lastName: 'Medhurst',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '8637686549',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '105',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '104',
      type: 'user',
      attributes: {
        firstName: 'Celia',
        lastName: 'Mosciski',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'august@gradykaulke.co',
      },
      relationships: {
      },
    },
    {
      id: '108',
      type: 'user',
      attributes: {
        firstName: 'Suzie',
        lastName: 'Schinner',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '7906630283',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '104',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '106',
      type: 'user',
      attributes: {
        firstName: 'Raul',
        lastName: 'Schoen',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'harrisonmuller@kerluke.org',
      },
      relationships: {
      },
    },
    {
      id: '107',
      type: 'user',
      attributes: {
        firstName: 'Eileen',
        lastName: 'Wilkinson',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'tommie@bernhard.com',
      },
      relationships: {
      },
    },
  ],
  included: [
    {
      id: '105',
      type: 'user',
      attributes: {
        firstName: 'Shane',
        lastName: 'Denesik',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'linwoodoconner@breitenberg.io',
      },
      relationships: {
      },
    },
    {
      id: '104',
      type: 'user',
      attributes: {
        firstName: 'Celia',
        lastName: 'Mosciski',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'august@gradykaulke.co',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 7,
  },
};
