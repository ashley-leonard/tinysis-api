// GET /api/notes?notableType=meetingParticipant&notableIds=1,3,5,7,9,2,4,6,8,10
export default {
  data: [
    {
      id: '64',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Baumbach / meeting 1',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '65',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Durgan / meeting 1',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '66',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Baumbach / meeting 2',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '67',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Durgan / meeting 2',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '68',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Baumbach / meeting 3',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '69',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Durgan / meeting 3',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '70',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Baumbach / meeting 4',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '71',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Durgan / meeting 4',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '72',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Baumbach / meeting 5',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '73',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Durgan / meeting 5',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
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
        email: 'hosea@kovacek.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '191',
              type: 'user',
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
