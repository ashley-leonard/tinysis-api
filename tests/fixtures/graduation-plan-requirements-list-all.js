// GET /api/graduation-plan-requirements
export default {
  data: [
    {
      id: '7',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Voluptatem in culpa. Eaque est repellat. Quia similique ut.\\n\\nCommodi optio laborum. Cum ut dicta. Temporibus est sunt.\\n\\nEarum accusantium dolores. Et molestiae fugiat. Sed aliquam culpa.',
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
        notes: 'Culpa eaque dicta. Quia dicta omnis. Voluptatem et quia.\\n\\nDignissimos sit nostrum. Ex quibusdam similique. Blanditiis ullam sint.\\n\\nTemporibus quae ut. Qui magnam reiciendis. Doloribus ratione possimus.',
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
        notes: 'Autem debitis voluptas. Quas tempora pariatur. Qui qui et.\\n\\nEx repellendus amet. Assumenda explicabo magnam. Amet nesciunt earum.\\n\\nNostrum ullam nesciunt. Ipsam dolor molestiae. Et incidunt dolorum.',
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
        notes: 'Enim est velit. Sed facilis perferendis. Praesentium perferendis incidunt.\\n\\nTenetur et nihil. Debitis tempore maiores. Aut temporibus explicabo.\\n\\nCorrupti delectus recusandae. Sed ipsum qui. Sit cum rem.',
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
        notes: 'Iure nulla doloribus. Facilis enim sint. Repellendus ex incidunt.\\n\\nImpedit quisquam voluptatibus. Qui sed sed. Corrupti inventore nostrum.\\n\\nCupiditate ratione ullam. Sed veniam laborum. Et iure qui.',
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
        notes: 'Hic quia sit. Ea ratione corrupti. Et numquam architecto.\\n\\nDolor aut sed. Est nobis distinctio. Nam sit quasi.\\n\\nVeritatis beatae nemo. Enim magnam quia. Consequatur amet ut.',
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
        notes: 'Voluptates animi sed. Voluptatem cum eum. Sapiente est est.\\n\\nReprehenderit et ut. Et voluptas ad. Accusantium est dolor.\\n\\nEt excepturi ea. Suscipit alias earum. Sit reiciendis consequatur.',
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
        notes: 'Quasi id et. Nostrum deserunt iure. Sed hic aut.\\n\\nMolestiae voluptas dolor. Aut aliquam quo. Quis consectetur consequatur.\\n\\nRepellendus iste numquam. Dignissimos nihil et. Quia laborum consequuntur.',
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
        notes: 'Cumque aut eum. Quaerat et neque. Facere ea distinctio.\\n\\nSint sed est. Ipsum ratione repellendus. Asperiores quam aperiam.\\n\\nQui omnis sapiente. Ut quia inventore. Animi voluptas corrupti.',
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
        notes: 'Cupiditate dolor perspiciatis. Ut est voluptate. Quidem cupiditate illo.\\n\\nEt nesciunt odio. Sed nostrum eius. Est rem saepe.\\n\\nConsequatur doloremque aut. Culpa ea ex. Veniam aut quas.',
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
