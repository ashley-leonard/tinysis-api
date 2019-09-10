// GET /api/credit-assignments?studentIds=27
export default {
  data: [
    {
      id: '32',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
      },
      relationships: {
        credit: {
          data: {
            id: '15',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
    {
      id: '33',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '16',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
    {
      id: '36',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
      },
      relationships: {
        credit: {
          data: {
            id: '15',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
    {
      id: '37',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '16',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '19',
            type: 'graduationPlanMapping',
          },
        },
      },
    },
    {
      id: '40',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
      },
      relationships: {
        credit: {
          data: {
            id: '15',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '18',
            type: 'graduationPlanMapping',
          },
        },
      },
    },
    {
      id: '41',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '16',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '17',
            type: 'graduationPlanMapping',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '15',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        courseType: 0,
      },
    },
    {
      id: '16',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        courseType: 0,
      },
    },
  ],
  meta: {
    count: 6,
  },
};
