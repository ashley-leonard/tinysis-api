// GET /api/notes?notableType=meetingParticipant&notableIds=2,4,6,8,10,1,3,5,7,9
export default {
  data: [
    {
      id: '64',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Turner / meeting 1',
        updatedAt: '2019-08-28T19:17:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '65',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Bogan / meeting 1',
        updatedAt: '2019-08-28T19:17:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '66',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Turner / meeting 2',
        updatedAt: '2019-08-28T19:17:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '67',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Bogan / meeting 2',
        updatedAt: '2019-08-28T19:17:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '4',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '68',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Turner / meeting 3',
        updatedAt: '2019-08-28T19:17:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '5',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '69',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Bogan / meeting 3',
        updatedAt: '2019-08-28T19:17:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '6',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '70',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Turner / meeting 4',
        updatedAt: '2019-08-28T19:17:09.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '7',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '71',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Bogan / meeting 4',
        updatedAt: '2019-08-28T19:17:10.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '8',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '72',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Turner / meeting 5',
        updatedAt: '2019-08-28T19:17:10.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '9',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '73',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Bogan / meeting 5',
        updatedAt: '2019-08-28T19:17:10.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '10',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '152',
      type: 'user',
      attributes: {
        firstName: 'Frederick',
        lastName: 'Lehner',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'jackie@nicolas.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '156',
              type: 'student',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 10,
  },
};
