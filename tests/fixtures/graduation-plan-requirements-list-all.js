// GET /api/graduation-plan-requirements
export default {
  data: [
    {
      id: '28',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Deserunt assumenda quasi. Cumque sit et. Alias ipsam laudantium.\\n\\nOmnis qui voluptates. Accusamus voluptatem natus. Optio dolor perspiciatis.\\n\\nCum totam nulla. Cupiditate ut nesciunt. Sit sint atque.',
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
      id: '30',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Qui omnis sed. Error quia placeat. Illum qui aut.\\n\\nTotam facilis enim. Commodi id rerum. Consequatur ratione in.\\n\\nTotam dignissimos rem. Autem provident expedita. Tenetur voluptatem officia.',
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
      id: '29',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Reiciendis ullam at. Doloribus incidunt in. Aperiam rerum est.\\n\\nSed voluptatem corrupti. Commodi sunt dolor. Repellat magnam sequi.\\n\\nUt dolore placeat. Quia repudiandae nihil. Voluptas est qui.',
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
      id: '23',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Ut ut et. Ab sequi amet. Earum accusantium corporis.\\n\\nUt at vero. Natus fugit dolore. Ut sit fuga.\\n\\nAtque et modi. Aliquam eum voluptas. Nostrum architecto beatae.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '25',
              type: 'GraduationPlanRequirement',
            },
            {
              id: '26',
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
    {
      id: '31',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Et sunt aut. Dignissimos rerum officia. Odio aut rerum.\\n\\nNam autem ut. Alias vel expedita. Saepe eos aut.\\n\\nVoluptatum et inventore. Maiores ut aut. Facilis sunt voluptas.',
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
      id: '27',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Aut consequuntur harum. In voluptas quae. Corrupti natus consectetur.\\n\\nDoloribus neque doloremque. Ab qui eos. Totam ut est.\\n\\nAtque hic quis. Consequatur magni tenetur. Officia architecto et.',
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
      id: '24',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Voluptas cumque eius. Eos sint consequuntur. Quod adipisci a.\\n\\nEa autem similique. Mollitia deleniti quas. Porro dolorum ut.\\n\\nAutem atque natus. Ut amet et. Non pariatur nam.',
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
