// GET /api/admin/graduation-plan-requirements
export default {
  data: [
    {
      id: '7',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Mollitia est sapiente. Ab voluptatem qui. Consequatur omnis minima.\\n\\nQuis quod voluptas. Sapiente nostrum sit. Saepe nam velit.\\n\\nEst explicabo aliquid. Nulla porro eos. Est beatae nesciunt.',
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
        notes: 'Eligendi ut sequi. Cum exercitationem a. Modi officiis ducimus.\\n\\nAliquid autem quae. Et harum consectetur. Voluptatem quia labore.\\n\\nQuibusdam molestias quo. Officia dolorem ipsum. Vitae ratione odio.',
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
        notes: 'Mollitia sint quidem. Maiores fugiat eveniet. Amet aut minima.\\n\\nMaiores quod harum. A provident quis. Et quos debitis.\\n\\nEligendi veritatis vel. Quidem exercitationem sunt. Harum eligendi natus.',
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
        notes: 'Mollitia doloremque dignissimos. Quibusdam veritatis ducimus. Iusto quisquam et.\\n\\nDolore alias quia. Voluptatem et quidem. Nulla et consequatur.\\n\\nNesciunt et aut. Consequuntur sunt consectetur. Qui rerum est.',
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
        notes: 'Maiores similique facilis. Iure odit aut. Et numquam magnam.\\n\\nFugit nisi eius. Quae unde voluptatem. Asperiores qui culpa.\\n\\nDelectus est id. Magni eos porro. Aliquam molestiae placeat.',
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
        notes: 'Vero voluptatem totam. Vel omnis animi. Corrupti vero et.\\n\\nExercitationem non voluptatem. Quia quasi ducimus. Quos in provident.\\n\\nAut voluptas omnis. Autem voluptas nihil. Blanditiis laudantium sit.',
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
        notes: 'Quas inventore magnam. Voluptas qui accusamus. Modi neque atque.\\n\\nEst dolor quo. Velit inventore et. Velit officiis incidunt.\\n\\nDebitis possimus ratione. Ex nemo ipsam. Enim explicabo perspiciatis.',
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
        notes: 'Accusantium corporis dolores. Sed dignissimos placeat. Quam velit quasi.\\n\\nOmnis facilis enim. Nostrum et libero. Pariatur quidem similique.\\n\\nPerferendis architecto fuga. Non consequatur ut. Nostrum omnis tenetur.',
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
        notes: 'Tempora fugit consequuntur. Et et occaecati. Quae aut consequatur.\\n\\nQuo nobis earum. Perspiciatis eaque aperiam. Aut neque totam.\\n\\nImpedit et dolor. Laborum optio deserunt. Quasi at aut.',
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
        notes: 'Adipisci quia officia. Rerum provident reprehenderit. Delectus tenetur nisi.\\n\\nFugiat velit error. Similique optio omnis. Voluptatum id quisquam.\\n\\nQui ipsam iure. Nihil iure aperiam. Qui sit consequatur.',
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
  },
};
