// GET /api/graduation-plan-requirements
export default {
  data: [
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
    {
      id: '22',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Optio fugit fugiat. Ea officia voluptate. Doloremque et nulla.\\n\\nQuas quisquam dignissimos. Iusto quae autem. Voluptatem quis harum.\\n\\nDelectus voluptas id. Similique at molestias. Quibusdam ea qui.',
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
      id: '16',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Qui optio quam. Animi ratione sit. Assumenda natus sed.\\n\\nSequi et itaque. Aut vero aspernatur. Et magnam voluptatum.\\n\\nEt temporibus aliquam. Perferendis sit ea. Cumque nihil dolore.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '18',
              type: 'GraduationPlanRequirement',
            },
            {
              id: '19',
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
      id: '24',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Omnis ut ut. Porro et voluptas. Quibusdam ratione inventore.\\n\\nNihil aliquam voluptas. Rerum velit veritatis. Consequatur quo qui.\\n\\nFugiat ex unde. Ipsam vitae inventore. Accusamus et nostrum.',
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
      id: '20',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Earum dolores cupiditate. Vitae quia minus. Odio nihil aspernatur.\\n\\nAdipisci voluptatibus omnis. Sequi culpa quos. Molestiae error quaerat.\\n\\nEst qui est. Occaecati laboriosam magnam. Aperiam occaecati corporis.',
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
      id: '17',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Aut ea sint. Omnis sed quod. Eos sunt cupiditate.\\n\\nExercitationem nulla fugiat. Quod molestiae dolore. Ad est ab.\\n\\nConsequatur ut non. Voluptatem illum accusantium. Quia accusamus dolorum.',
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
