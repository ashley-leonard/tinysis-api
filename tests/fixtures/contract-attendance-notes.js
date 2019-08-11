// GET /api/notes?notableType=meetingParticipant&notableIds=2,4,6,8,10,1,3,5,7,9
export default {
  data: [
    {
      id: '62',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for student Ratke / meeting 1',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '63',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for student Blanda / meeting 1',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '64',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for student Ratke / meeting 2',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '65',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for student Blanda / meeting 2',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '66',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for student Ratke / meeting 3',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '67',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for student Blanda / meeting 3',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '68',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for student Ratke / meeting 4',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '69',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for student Blanda / meeting 4',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '70',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for student Ratke / meeting 5',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '71',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for student Blanda / meeting 5',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Angel',
        lastName: 'McLaughlin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'stellawilderman@aufderhar.com',
        status: 'active',
        role: 'staff',
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
  ],
  meta: {
    count: 10,
  },
};
