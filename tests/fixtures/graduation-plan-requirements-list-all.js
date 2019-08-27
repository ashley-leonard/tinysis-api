// GET /api/graduation-plan-requirements
export default {
  data: [
    {
      id: '29',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Mollitia id ut. Magnam eum sint. Est eius placeat.\\n\\nUt odit possimus. Accusamus dolorem aut. Facere ex ad.\\n\\nRerum quidem consectetur. Ut vero est. Quaerat assumenda ex.',
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
      id: '26',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Ipsum sunt itaque. Ab sit nihil. Illo totam reprehenderit.\\n\\nOmnis nam eligendi. Doloribus dolores natus. Sed enim praesentium.\\n\\nEst cum iure. Omnis sed est. Itaque esse ea.',
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
            id: '24',
            type: 'GraduationPlanRequirement',
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
    {
      id: '31',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Itaque officia excepturi. Commodi aut dolores. Tempore voluptas nihil.\\n\\nQuis qui dolor. Autem corporis debitis. Molestiae ut voluptas.\\n\\nEum eius nulla. Fugit eos eligendi. Quo ratione fugit.',
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
      id: '30',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Consectetur est totam. Qui officiis accusantium. Quia natus sit.\\n\\nNam non at. Deserunt et ducimus. Voluptatem sed vel.\\n\\nMinima eveniet qui. Non maiores enim. Quis dolor rerum.',
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
      id: '24',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Autem illo laborum. Quod consequuntur officiis. Numquam officiis at.\\n\\nRecusandae qui dolore. Et quas sed. Minima eum iusto.\\n\\nOdit omnis officiis. Eum ex cumque. Esse beatae magnam.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '26',
              type: 'GraduationPlanRequirement',
            },
            {
              id: '27',
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
      id: '27',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Itaque accusantium hic. Architecto ex et. Velit molestiae perspiciatis.\\n\\nQui consequatur ipsam. Commodi hic voluptatum. Nisi et ab.\\n\\nIpsam pariatur aliquid. Ducimus alias omnis. Aut numquam ut.',
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
            id: '24',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '32',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Aliquid aspernatur corrupti. Fuga commodi et. Delectus consectetur sint.\\n\\nVoluptatem totam qui. Corporis maiores in. Aut sapiente impedit.\\n\\nDignissimos rem eaque. Odio illum quo. Voluptatibus rerum itaque.',
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
      id: '28',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Rerum minus quae. Dolorum iste non. Excepturi alias ullam.\\n\\nMolestiae sint at. Tempora dolor nobis. Et aliquam culpa.\\n\\nEt dolorem nemo. Et repellendus voluptatem. Natus doloremque soluta.',
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
      id: '25',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Quos porro dolores. Cum deserunt iste. Sint fugit consequatur.\\n\\nMinima itaque vitae. Aut id quia. Cum placeat nemo.\\n\\nReiciendis velit cumque. Voluptate ea modi. Et dicta deleniti.',
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
