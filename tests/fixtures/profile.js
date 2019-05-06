// GET /api/profile
export default {
  data: {
    id: '1',
    type: 'user',
    attributes: {
      firstName: 'Perry',
      lastName: 'Rolfson',
      nickname: null,
      dateActive: '2012-09-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      login: '99riqb6cik3e',
      email: 'nidia@stroman.net',
      canLogin: false,
      isActive: true,
      role: 'staff',
      isAdmin: false,
      status: 'active',
    },
    relationships: {
      coordinatees: {
        data: [
          {
            id: '5',
            type: 'student',
          },
        ],
      },
    },
  },
};
