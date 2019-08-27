// GET /api/graduation-plan-mappings/185
export default {
  data: [
    {
      id: '14',
      type: 'graduationPlanMapping',
      relationships: {
        student: {
          data: {
            id: '185',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '23',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '27',
            type: 'creditAssignment',
          },
        },
      },
    },
  ],
  included: [
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
      id: '23',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Fugiat pariatur cum. Ipsam et blanditiis. Quisquam omnis ratione.\\n\\nVoluptatem asperiores corrupti. Perferendis nisi voluptates. Aliquid voluptatem ullam.\\n\\nPerspiciatis ut eveniet. Et debitis perferendis. Dolor dignissimos adipisci.',
        position: 1,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: null,
        },
      },
    },
  ],
  meta: {
    count: 1,
  },
};
