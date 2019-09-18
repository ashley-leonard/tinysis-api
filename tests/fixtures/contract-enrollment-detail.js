// GET /api/enrollments/15?include=participant,turnins,meetingParticipants,creditAssignments,creditAssignments.credit
export default {
  data: {
    id: '15',
    type: 'enrollment',
    attributes: {
      finalizedOn: null,
      enrollmentStatus: 'enrolled',
      completionStatus: 'incomplete',
    },
    relationships: {
      contract: {
        data: {
          id: '14',
          type: 'contract',
        },
      },
      participant: {
        data: {
          id: '191',
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
  included: [
    {
      id: '28',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '45',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
        childCreditAssignments: {
          data: [

          ],
        },
        parentCreditAssignment: {
          data: null,
        },
      },
    },
    {
      id: '45',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        status: 'active',
        courseType: 'none',
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
            id: '15',
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
            id: '15',
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
            id: '15',
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
            id: '15',
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
            id: '15',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '191',
      type: 'user',
      attributes: {
        firstName: 'Wally',
        lastName: 'Baumbach',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '8257538751',
        districtGrade: 12,
        email: null,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '187',
            type: 'user',
          },
        },
      },
    },
    {
      id: '1',
      type: 'turnin',
      attributes: {
        status: 'complete',
      },
      relationships: {
        assignment: {
          data: {
            id: '1',
            type: 'assignment',
          },
        },
        enrollment: {
          data: {
            id: '15',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '2',
      type: 'turnin',
      attributes: {
        status: 'complete',
      },
      relationships: {
        assignment: {
          data: {
            id: '2',
            type: 'assignment',
          },
        },
        enrollment: {
          data: {
            id: '15',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '3',
      type: 'turnin',
      attributes: {
        status: 'complete',
      },
      relationships: {
        assignment: {
          data: {
            id: '3',
            type: 'assignment',
          },
        },
        enrollment: {
          data: {
            id: '15',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '4',
      type: 'turnin',
      attributes: {
        status: 'complete',
      },
      relationships: {
        assignment: {
          data: {
            id: '4',
            type: 'assignment',
          },
        },
        enrollment: {
          data: {
            id: '15',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '5',
      type: 'turnin',
      attributes: {
        status: 'complete',
      },
      relationships: {
        assignment: {
          data: {
            id: '5',
            type: 'assignment',
          },
        },
        enrollment: {
          data: {
            id: '15',
            type: 'enrollment',
          },
        },
      },
    },
  ],
};
