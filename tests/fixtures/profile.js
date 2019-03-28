// GET /api/profile
export default {
  data: {
    id: '2',
    type: 'user',
    attributes: {
      firstName: 'Scottie',
      lastName: 'Zieme',
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
