// GET /api/admin/users/1
export default {
  data: {
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
};
