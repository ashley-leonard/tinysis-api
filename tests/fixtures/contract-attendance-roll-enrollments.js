// GET /api/enrollments?contractIds=3&include=participant
export default {
  data: [
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
  ],
  included: [
    {
      id: '5',
      type: 'user',
      attributes: {
        firstName: 'Sherilyn',
        lastName: 'Gislason',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '1564901313',
        districtGrade: 12,
        login: 'vpfzmxp37foz',
        email: null,
        canLogin: false,
        isActive: true,
        role: 'student',
        isAdmin: false,
        status: 'active',
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
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Adaline',
        lastName: 'Jenkins',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '9104205690',
        districtGrade: 12,
        login: 'ryjrzhlustnw',
        email: null,
        canLogin: false,
        isActive: false,
        role: 'student',
        isAdmin: false,
        status: 'inactive',
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
  ],
  meta: {
    count: 2,
  },
};
