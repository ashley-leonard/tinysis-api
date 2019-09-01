// GET /api/enrollments/5?include=participant,turnins,meetingParticipants,creditAssignments,creditAssignments.credit
export default {
  data: {
    id: '5',
    type: 'enrollment',
    attributes: {
      finalizedOn: null,
      enrollmentStatus: 'enrolled',
      completionStatus: 'incomplete',
    },
    relationships: {
      contract: {
        data: {
          id: '9',
          type: 'contract',
        },
      },
      participant: {
        data: {
          id: '108',
          type: 'participant',
        },
      },
      creditAssignments: {
        data: [
          {
            id: '7',
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
      id: '7',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '1',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
    {
      id: '1',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        courseType: 0,
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
            id: '5',
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
            id: '5',
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
            id: '5',
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
            id: '5',
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
            id: '5',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '108',
      type: 'user',
      attributes: {
        firstName: 'Suzie',
        lastName: 'Schinner',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '7906630283',
        districtGrade: 12,
        email: null,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '104',
            type: 'staff',
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
            id: '5',
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
            id: '5',
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
            id: '5',
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
            id: '5',
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
            id: '5',
            type: 'enrollment',
          },
        },
      },
    },
  ],
};
