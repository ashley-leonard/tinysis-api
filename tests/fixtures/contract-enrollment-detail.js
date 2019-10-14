// GET /api/enrollments/11?include=participant,turnins,meetingParticipants,creditAssignments,creditAssignments.credit
export default {
  data: {
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
        contractTerm: {
          data: null,
        },
        contractFacilitator: {
          data: null,
        },
        contract: {
          data: null,
        },
        user: {
          data: null,
        },
        creditTransmittalBatch: {
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
            id: '11',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '4',
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
            id: '11',
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
            id: '3',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '11',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '10',
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
            id: '11',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '13',
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
            id: '11',
            type: 'enrollment',
          },
        },
      },
    },
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
            id: '11',
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
            id: '11',
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
            id: '11',
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
            id: '11',
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
            id: '11',
            type: 'enrollment',
          },
        },
      },
    },
  ],
};
