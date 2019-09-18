// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '191',
      type: 'user',
      attributes: {
        firstName: 'Wally',
        lastName: 'Baumbach',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '8257538751',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '187',
            type: 'user',
          },
        },
      },
    },
    {
      id: '193',
      type: 'user',
      attributes: {
        firstName: 'Ramon',
        lastName: 'Durgan',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '7445503495',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '188',
            type: 'user',
          },
        },
      },
    },
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
        status: 'active',
        role: 'staff',
        email: 'hosea@kovacek.info',
      },
      relationships: {
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
        status: 'active',
        role: 'staff',
        email: 'marcelle@satterfield.info',
      },
      relationships: {
      },
    },
    {
      id: '192',
      type: 'user',
      attributes: {
        firstName: 'Maura',
        lastName: 'Lowe',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4487389042',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '188',
            type: 'user',
          },
        },
      },
    },
    {
      id: '189',
      type: 'user',
      attributes: {
        firstName: 'Ronnie',
        lastName: 'Orn',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'brett@ricefeil.biz',
      },
      relationships: {
      },
    },
    {
      id: '190',
      type: 'user',
      attributes: {
        firstName: 'Shaun',
        lastName: 'Stokes',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'belinda@lueilwitzbartoletti.com',
      },
      relationships: {
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
        status: 'active',
        role: 'staff',
        email: 'hosea@kovacek.info',
      },
      relationships: {
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
        status: 'active',
        role: 'staff',
        email: 'marcelle@satterfield.info',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 7,
  },
};
