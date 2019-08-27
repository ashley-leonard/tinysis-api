// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '181',
      type: 'user',
      attributes: {
        firstName: 'Carita',
        lastName: 'Cremin',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'emilewindler@sanford.biz',
      },
      relationships: {
      },
    },
    {
      id: '186',
      type: 'user',
      attributes: {
        firstName: 'Jarrod',
        lastName: 'Gulgowski',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '3246089314',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '181',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '183',
      type: 'user',
      attributes: {
        firstName: 'Nestor',
        lastName: 'Jacobi',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'paz@schmidtstark.biz',
      },
      relationships: {
      },
    },
    {
      id: '180',
      type: 'user',
      attributes: {
        firstName: 'Karena',
        lastName: 'Jacobs',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'ariezemlak@macejkovicwhite.com',
      },
      relationships: {
      },
    },
    {
      id: '182',
      type: 'user',
      attributes: {
        firstName: 'Margeret',
        lastName: 'Kub',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'willard@wuckert.name',
      },
      relationships: {
      },
    },
    {
      id: '184',
      type: 'user',
      attributes: {
        firstName: 'Gerardo',
        lastName: 'Schimmel',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '5751521221',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '180',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '185',
      type: 'user',
      attributes: {
        firstName: 'Benjamin',
        lastName: 'Witting',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6122664377',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '181',
            type: 'staff',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '181',
      type: 'user',
      attributes: {
        firstName: 'Carita',
        lastName: 'Cremin',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'emilewindler@sanford.biz',
      },
      relationships: {
      },
    },
    {
      id: '180',
      type: 'user',
      attributes: {
        firstName: 'Karena',
        lastName: 'Jacobs',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'ariezemlak@macejkovicwhite.com',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 7,
  },
};
