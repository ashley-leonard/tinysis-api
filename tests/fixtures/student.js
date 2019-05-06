// GET /api/students/5
export default {
  data: {
    id: '5',
    type: 'user',
    attributes: {
      firstName: 'Sherilyn',
      lastName: 'Gislason',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '1564901313',
      districtGrade: 12,
      status: 'active',
      role: 'student',
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
};
