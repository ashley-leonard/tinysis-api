// GET /api/graduation-plan-mappings/157
export default {
  data: [
    {
      id: '1',
      type: 'graduationPlanMapping',
      relationships: {
        student: {
          data: {
            id: '157',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '11',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '14',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '2',
      type: 'graduationPlanMapping',
      relationships: {
        student: {
          data: {
            id: '157',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '14',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '12',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '3',
      type: 'graduationPlanMapping',
      relationships: {
        student: {
          data: {
            id: '157',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '15',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '10',
            type: 'creditAssignment',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '14',
      type: 'creditAssignment',
      attributes: {
        creditHours: 2.0,
      },
      relationships: {
        credit: {
          data: {
            id: '7',
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
    {
      id: '11',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Tempore aliquid quos. Est aut consequuntur. Voluptas incidunt quos.\\n\\nEst animi aut. Mollitia commodi quos. Expedita nostrum deleniti.\\n\\nRerum id quis. Assumenda et maxime. Consequatur deserunt sint.',
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
    {
      id: '12',
      type: 'creditAssignment',
      attributes: {
        creditHours: 2.0,
      },
      relationships: {
        credit: {
          data: {
            id: '7',
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
      id: '14',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Saepe in quis. Quia ea neque. Et eaque qui.\\n\\nPariatur eos quos. Provident hic sunt. Quasi dolore quia.\\n\\nTenetur unde ad. Est et reiciendis. Nam et ratione.',
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
          data: {
            id: '12',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '10',
      type: 'creditAssignment',
      attributes: {
        creditHours: 2.0,
      },
      relationships: {
        credit: {
          data: {
            id: '7',
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
      id: '15',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Qui sed similique. Dignissimos et in. Dignissimos aut a.\\n\\nLabore voluptatum in. Iure eum deserunt. Fuga recusandae rerum.\\n\\nVoluptas et repudiandae. Dolorem libero culpa. Iure mollitia magni.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: {
            id: '12',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
  ],
  meta: {
    count: 3,
  },
};
