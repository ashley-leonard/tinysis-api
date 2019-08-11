// GET /api/enrollments?contractIds=3&include=meetingParticipants,participant
export default {
  data: [
    {
      id: '2',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '3',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '7',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '6',
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
              id: '4',
              type: 'meetingParticipant',
            },
            {
              id: '6',
              type: 'meetingParticipant',
            },
            {
              id: '8',
              type: 'meetingParticipant',
            },
            {
              id: '10',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '1',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '3',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '5',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '5',
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
              id: '3',
              type: 'meetingParticipant',
            },
            {
              id: '5',
              type: 'meetingParticipant',
            },
            {
              id: '7',
              type: 'meetingParticipant',
            },
            {
              id: '9',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '2',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '1',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '2',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '4',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '2',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '2',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '6',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '3',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '2',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '8',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '4',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '2',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '10',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '5',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '2',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Zetta',
        lastName: 'Blanda',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '2333436592',
        districtGrade: 12,
        email: null,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '1',
      type: 'meetingParticipant',
      attributes: {
        participation: 'present',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '1',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '1',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '3',
      type: 'meetingParticipant',
      attributes: {
        participation: 'present',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '2',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '1',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '5',
      type: 'meetingParticipant',
      attributes: {
        participation: 'present',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '3',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '1',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '7',
      type: 'meetingParticipant',
      attributes: {
        participation: 'present',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '4',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '1',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '9',
      type: 'meetingParticipant',
      attributes: {
        participation: 'present',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '5',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '1',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '5',
      type: 'user',
      attributes: {
        firstName: 'Zachery',
        lastName: 'Ratke',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4824754434',
        districtGrade: 12,
        email: null,
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
  ],
  meta: {
    count: 2,
  },
};
