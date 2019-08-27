// GET /api/credit-assignments?studentIds=185
export default {
  data: [
    {
      id: '27',
      type: 'creditAssignment',
      attributes: {
        creditHours: 2.0,
      },
      relationships: {
        credit: {
          data: {
            id: '19',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '14',
            type: 'graduationPlanMapping',
          },
        },
      },
    },
    {
      id: '29',
      type: 'creditAssignment',
      attributes: {
        creditHours: 2.0,
      },
      relationships: {
        credit: {
          data: {
            id: '19',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
  ],
  included: [
    {
      id: '19',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        courseType: 0,
      },
    },
  ],
  meta: {
    count: 2,
  },
};
