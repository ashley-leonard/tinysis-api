// GET /api/profile
export default {
  data: {
    id: '2',
    type: 'user',
    attributes: {
      firstName: 'Evita',
      lastName: 'Haley',
      nickname: null,
      dateActive: null,
      dateInactive: null,
      status: 'active',
      role: 'staff',
    },
    relationships: {
      coordinatees: {
        data: [
          {
            id: '6',
            type: 'student',
          },
          {
            id: '7',
            type: 'student',
          },
        ],
      },
    },
  },
};
