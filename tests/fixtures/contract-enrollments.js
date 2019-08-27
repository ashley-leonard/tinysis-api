// GET /api/enrollments?contractIds=8&include=creditAssignments,creditAssignments.credit,participant
export default {
  data: [
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
            id: '8',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '186',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '24',
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
            id: '8',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '184',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '23',
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
      id: '24',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '18',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
    {
      id: '18',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        courseType: 0,
      },
    },
    {
      id: '186',
      type: 'user',
      attributes: {
        firstName: 'Jarrod',
        lastName: 'Gulgowski',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '3246089314',
        districtGrade: 12,
        email: null,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '181',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '23',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '18',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
    {
      id: '184',
      type: 'user',
      attributes: {
        firstName: 'Gerardo',
        lastName: 'Schimmel',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '5751521221',
        districtGrade: 12,
        email: null,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '180',
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
