// GET /api/graduation-plan-mappings/27
export default {
  data: [
    {
      id: '17',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '27',
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
            id: '41',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '18',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '27',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '18',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '40',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '19',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '27',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '19',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '37',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '20',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: '2019-06-15',
        notes: 'It is done',
      },
      relationships: {
        student: {
          data: {
            id: '27',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '21',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: null,
        },
      },
    },
    {
      id: '21',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: '2019-06-15',
        notes: 'It is serviced',
      },
      relationships: {
        student: {
          data: {
            id: '27',
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
          data: null,
        },
      },
    },
  ],
  included: [
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
    {
      id: '15',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Nisi alias optio. Minima numquam voluptates. Sed libero labore.\\n\\nQuae odio mollitia. At qui pariatur. Id consectetur cumque.\\n\\nEarum sed eaque. Est nisi velit. Veniam est ullam.',
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
      id: '18',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Consectetur ut ab. Eos et reiciendis. Possimus maiores qui.\\n\\nSaepe libero doloremque. Rerum aut qui. Ut ratione pariatur.\\n\\nLaudantium ipsum voluptatem. Molestias ipsa quia. Sunt sit et.',
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
            id: '16',
            type: 'GraduationPlanRequirement',
          },
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
      id: '19',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Omnis deserunt rerum. Autem velit itaque. Eum ducimus asperiores.\\n\\nSint aliquam consequuntur. Est cupiditate consequatur. Commodi odit consequatur.\\n\\nPerspiciatis dolorum quia. Quaerat doloribus qui. Et harum libero.',
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
            id: '16',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '21',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Veniam ab accusamus. Dolor sint ut. Quam minus id.\\n\\nQuae qui cupiditate. Aliquam voluptatem alias. Itaque vero et.\\n\\nVoluptatibus deserunt asperiores. Magni quis consequatur. Repudiandae voluptate repellendus.',
        position: 1,
        requirementType: 'general',
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
      id: '23',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Nobis est harum. Nihil sapiente beatae. Tenetur necessitatibus facilis.\\n\\nIusto earum itaque. Suscipit omnis velit. Maiores minima harum.\\n\\nEius dolores atque. Ad accusantium voluptate. Eveniet molestiae cum.',
        position: 1,
        requirementType: 'service',
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
    count: 5,
  },
};
