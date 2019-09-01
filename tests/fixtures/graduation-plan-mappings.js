// GET /api/graduation-plan-mappings/109
export default {
  data: [
    {
      id: '1',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '109',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '22',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '15',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '2',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '109',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '25',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '13',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '3',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '109',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '26',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '11',
            type: 'creditAssignment',
          },
        },
      },
    },
  ],
  included: [
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
    {
      id: '22',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Et et reiciendis. Quia maiores nihil. Aliquid aut incidunt.\\n\\nEos commodi provident. Beatae sed ut. Sequi recusandae ut.\\n\\nNon assumenda sapiente. Ea numquam possimus. Veniam quam sit.',
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
      id: '25',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Qui natus veritatis. Minus sequi autem. Recusandae veritatis hic.\\n\\nRerum expedita dolor. Quia aut molestias. Occaecati eaque repellendus.\\n\\nEx eos consequuntur. In et omnis. Cumque iure quia.',
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
            id: '23',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
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
      id: '26',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Aut modi distinctio. Eum repellat possimus. Inventore veritatis dolores.\\n\\nVoluptas minima soluta. Aut incidunt occaecati. Aspernatur quam eos.\\n\\nEum qui doloribus. Aut fuga magni. Harum incidunt vitae.',
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
            id: '23',
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
