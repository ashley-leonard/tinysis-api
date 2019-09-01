// GET /api/credit-assignments?studentIds=109
export default {
  data: [
    {
      id: '11',
      type: 'creditAssignment',
      attributes: {
        creditHours: 2.0,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '3',
            type: 'graduationPlanMapping',
          },
        },
      },
    },
    {
      id: '13',
      type: 'creditAssignment',
      attributes: {
        creditHours: 2.0,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '2',
            type: 'graduationPlanMapping',
          },
        },
      },
    },
    {
      id: '15',
      type: 'creditAssignment',
      attributes: {
        creditHours: 2.0,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '1',
            type: 'graduationPlanMapping',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '2',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        courseType: 0,
      },
    },
  ],
  meta: {
    count: 3,
  },
};
