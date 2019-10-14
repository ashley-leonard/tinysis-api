// GET /api/enrollments?contractIds=10&include=participant
export default {
  data: [
    {
      id: '11',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '10',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '98',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '28',
              type: 'creditAssignment',
            },
          ],
        },
        turnins: {
          data: [
            {
              id: '1',
              type: 'turnin',
            },
            {
              id: '2',
              type: 'turnin',
            },
            {
              id: '3',
              type: 'turnin',
            },
            {
              id: '4',
              type: 'turnin',
            },
            {
              id: '5',
              type: 'turnin',
            },
          ],
        },
        meetingParticipants: {
          data: [
            {
              id: '1',
              type: 'meetingParticipant',
            },
            {
              id: '4',
              type: 'meetingParticipant',
            },
            {
              id: '7',
              type: 'meetingParticipant',
            },
            {
              id: '10',
              type: 'meetingParticipant',
            },
            {
              id: '13',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '12',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '10',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '99',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '29',
              type: 'creditAssignment',
            },
          ],
        },
        turnins: {
          data: [

          ],
        },
        meetingParticipants: {
          data: [
            {
              id: '2',
              type: 'meetingParticipant',
            },
            {
              id: '5',
              type: 'meetingParticipant',
            },
            {
              id: '8',
              type: 'meetingParticipant',
            },
            {
              id: '11',
              type: 'meetingParticipant',
            },
            {
              id: '14',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '13',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '10',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '100',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '30',
              type: 'creditAssignment',
            },
          ],
        },
        turnins: {
          data: [

          ],
        },
        meetingParticipants: {
          data: [
            {
              id: '3',
              type: 'meetingParticipant',
            },
            {
              id: '6',
              type: 'meetingParticipant',
            },
            {
              id: '9',
              type: 'meetingParticipant',
            },
            {
              id: '12',
              type: 'meetingParticipant',
            },
            {
              id: '15',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '98',
      type: 'user',
      attributes: {
        firstName: 'Adrian',
        lastName: 'Bahringer',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '1086617984',
        districtGrade: 12,
        email: null,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '94',
            type: 'user',
          },
        },
      },
    },
    {
      id: '99',
      type: 'user',
      attributes: {
        firstName: 'Connie',
        lastName: 'Kunze',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '8805060332',
        districtGrade: 12,
        email: null,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '95',
            type: 'user',
          },
        },
      },
    },
    {
      id: '100',
      type: 'user',
      attributes: {
        firstName: 'Melita',
        lastName: 'Mann',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '5464249688',
        districtGrade: 12,
        email: null,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '95',
            type: 'user',
          },
        },
      },
    },
  ],
  meta: {
    count: 3,
  },
};
