// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '11',
      type: 'user',
      attributes: {
        firstName: 'Leatrice',
        lastName: 'Bednar',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '2870279804',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '7',
            type: 'user',
          },
        },
      },
    },
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Dominic',
        lastName: 'Collier',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'janelle@rathskiles.net',
      },
      relationships: {
      },
    },
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Antonio',
        lastName: 'Fahey',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'xavier@heathcote.net',
      },
      relationships: {
      },
    },
    {
      id: '10',
      type: 'user',
      attributes: {
        firstName: 'Cleotilde',
        lastName: 'Kohler',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'simon@watermith.name',
      },
      relationships: {
      },
    },
    {
      id: '12',
      type: 'user',
      attributes: {
        firstName: 'Garry',
        lastName: 'Pollich',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '1780983772',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '8',
            type: 'user',
          },
        },
      },
    },
    {
      id: '8',
      type: 'user',
      attributes: {
        firstName: 'Weston',
        lastName: 'Rempel',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'judsonparker@upton.info',
      },
      relationships: {
      },
    },
    {
      id: '9',
      type: 'user',
      attributes: {
        firstName: 'Lillie',
        lastName: 'Treutel',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'rich@wuckertohara.name',
      },
      relationships: {
      },
    },
    {
      id: '13',
      type: 'user',
      attributes: {
        firstName: 'Bernice',
        lastName: 'Yundt',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '5621269128',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '8',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Dominic',
        lastName: 'Collier',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'janelle@rathskiles.net',
      },
      relationships: {
      },
    },
    {
      id: '8',
      type: 'user',
      attributes: {
        firstName: 'Weston',
        lastName: 'Rempel',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'judsonparker@upton.info',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 8,
  },
};
