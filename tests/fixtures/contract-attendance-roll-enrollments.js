// GET /api/enrollments?contractIds=9&include=participant
export default {
  data: [
    {
      id: '6',
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
            id: '110',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '8',
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
  ],
  included: [
    {
      id: '110',
      type: 'user',
      attributes: {
        firstName: 'Velma',
        lastName: 'Medhurst',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '8637686549',
        districtGrade: 12,
        email: null,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '105',
            type: 'staff',
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
  ],
  meta: {
    count: 2,
  },
};
