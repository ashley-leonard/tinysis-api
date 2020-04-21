// GET /api/graduation-plan-requirements
export default {
  data: [
    {
      id: '7',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Sed voluptas possimus. Vel consequatur rerum. Ea adipisci repellendus.\\n\\nQuia totam earum. Aut dolor voluptatibus. Voluptatem ut voluptatum.\\n\\nUt sit vero. Porro aspernatur iure. Ea omnis sequi.',
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
      id: '4',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Alias rem aut. Est cum nam. Dolores non in.\\n\\nAmet ut est. Eos est omnis. At possimus nostrum.\\n\\nMagnam porro modi. Quisquam quia enim. Molestiae et excepturi.',
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
            id: '2',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '1',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Dolores est quia. Quo sint incidunt. Praesentium et autem.\\n\\nReiciendis a omnis. Quis eos quis. Aut est blanditiis.\\n\\nVel asperiores minus. Harum dolorem sit. Ut blanditiis dolorum.',
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
      id: '9',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Necessitatibus et alias. Numquam qui est. Animi et voluptas.\\n\\nDeleniti voluptate id. Fugit dolores culpa. Corrupti vero delectus.\\n\\nMaxime molestiae sequi. Est assumenda neque. Dolor id corrupti.',
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
      id: '8',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Molestias necessitatibus deleniti. Voluptatem aut unde. Tenetur aut molestias.\\n\\nVoluptatem quaerat repudiandae. Veniam facere expedita. Voluptas tempore vel.\\n\\nVoluptatem labore quam. Commodi veritatis tempore. Officia eum molestiae.',
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
      id: '2',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Dolor excepturi sit. Illo minima quis. Fugiat velit nostrum.\\n\\nItaque sit ut. Cum doloremque quam. Molestiae provident optio.\\n\\nLaboriosam qui eaque. Autem quos dolor. Ut et ipsum.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '4',
              type: 'GraduationPlanRequirement',
            },
            {
              id: '5',
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
      id: '5',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Eum tempora voluptatem. Alias in rerum. Eum cum sequi.\\n\\nEos qui amet. Consectetur assumenda hic. Officiis commodi error.\\n\\nEt vero officiis. Deleniti cupiditate aliquid. Est illo magnam.',
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
            id: '2',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '10',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Facilis voluptate est. Ipsa sunt quo. Cum aut ipsum.\\n\\nSaepe ab et. Blanditiis minus nihil. Pariatur provident sed.\\n\\nConsequatur ut iure. Omnis expedita placeat. Aut sapiente maxime.',
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
      id: '6',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Possimus ullam quis. Modi corrupti rerum. Incidunt sunt sunt.\\n\\nVoluptatem nostrum minus. Et nobis voluptas. Maiores nam ab.\\n\\nConsequatur nemo unde. In est et. Quia earum commodi.',
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
      id: '3',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Quo pariatur debitis. Repudiandae enim in. Eum reprehenderit ea.\\n\\nMagnam veniam provident. Voluptates aut ducimus. Aliquam libero blanditiis.\\n\\nOptio nulla qui. Rerum perspiciatis ut. Maxime iste voluptatibus.',
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
    data: {
      status: null,
    },
  },
};
