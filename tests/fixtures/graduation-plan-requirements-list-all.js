// GET /api/graduation-plan-requirements
export default {
  data: [
    {
      id: '17',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Qui maiores esse. Aut at expedita. Unde alias minima.\\n\\nLaborum consequatur nisi. Eveniet et voluptatem. Eum voluptatem unde.\\n\\nVoluptatum ut iste. Exercitationem velit assumenda. Minus incidunt natus.',
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
      id: '19',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Eum impedit qui. Et soluta magnam. Ea ipsam placeat.\\n\\nDoloremque qui voluptatem. Autem distinctio impedit. Nihil voluptatibus sit.\\n\\nEum corrupti et. Ab similique itaque. Aut tempore quo.',
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
    {
      id: '18',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Tempora qui nemo. Et non dolore. Repellat cumque omnis.\\n\\nEt aut aut. Voluptatem qui nihil. Soluta repudiandae aut.\\n\\nCum temporibus assumenda. Aut voluptas rerum. Ex quis voluptatem.',
        position: 2,
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
      id: '12',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Aperiam tempora est. Minus alias et. Ea aliquam error.\\n\\nEos eligendi adipisci. Eligendi quia exercitationem. Quasi distinctio sed.\\n\\nRecusandae tempora dignissimos. Incidunt magni voluptates. Sit similique aut.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '14',
              type: 'GraduationPlanRequirement',
            },
            {
              id: '15',
              type: 'GraduationPlanRequirement',
            },
          ],
        },
        parent: {
          data: null,
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
    {
      id: '20',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Deleniti voluptatibus eveniet. Voluptatum incidunt minus. Non quia id.\\n\\nQuis tempora beatae. Alias porro fugiat. Ut quas ullam.\\n\\nEnim eum labore. Mollitia suscipit sit. Ipsa et minus.',
        position: 2,
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
    {
      id: '16',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Eos et autem. Commodi non quos. Dolorem ea deleniti.\\n\\nEius dolores est. Consequuntur expedita sequi. Aut aut velit.\\n\\nAut perspiciatis possimus. Eos iste eum. Ipsum doloremque saepe.',
        position: 3,
        requirementType: 'credit',
        status: 'inactive',
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
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Eum ut nihil. Et voluptate numquam. Minima fugiat labore.\\n\\nUt qui ratione. Quasi at vel. Maxime consequatur distinctio.\\n\\nTemporibus corrupti cum. Ab dolorum aut. Sit iusto optio.',
        position: 3,
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
    count: 10,
    params: {
      status: null,
    },
  },
};
