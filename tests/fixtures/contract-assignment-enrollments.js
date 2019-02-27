export default {
  data: [
    {
      id: '4',
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
            id: '6',
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
      },
    },
    {
      id: '3',
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
            id: '4',
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
      },
    },
  ],
  included: [
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Jessie',
        lastName: 'Lueilwitz',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        status: 'inactive',
        role: 'student',
        districtId: null,
        districtGrade: null,
        coordinatorId: '2',
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'coordinator',
          },
        },
      },
    },
    {
      id: '4',
      type: 'user',
      attributes: {
        firstName: 'Korey',
        lastName: 'Zemlak',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        status: 'active',
        role: 'student',
        districtId: null,
        districtGrade: null,
        coordinatorId: '1',
      },
      relationships: {
        coordinator: {
          data: {
            id: '1',
            type: 'coordinator',
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
            id: '3',
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
            id: '3',
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
            id: '3',
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
            id: '3',
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
            id: '3',
            type: 'enrollment',
          },
        },
      },
    },
  ],
  meta: {
    count: 2,
  },
};
