// GET /api/graduation-plan-requirements
export default {
  data: [
    {
      id: '32',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Consectetur et qui. Dolorum adipisci veniam. Ut architecto deleniti.\\n\\nUllam in temporibus. Et dolorem officiis. Consequuntur deserunt ullam.\\n\\nPossimus quia mollitia. Ratione cupiditate labore. Cumque deserunt est.',
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
      id: '29',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Non enim aut. Est et qui. Commodi blanditiis modi.\\n\\nDolorem neque eos. Enim ut qui. Expedita sapiente quisquam.\\n\\nLibero qui ut. Fuga odio explicabo. Harum officia consequatur.',
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
            id: '27',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '26',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Nihil quia consequatur. Commodi maxime itaque. Vitae quos vel.\\n\\nEst nihil nulla. Ad iusto perferendis. Nisi impedit eligendi.\\n\\nOfficia nesciunt earum. Quo repellendus tempora. Nesciunt incidunt distinctio.',
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
      id: '34',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Eos impedit ea. In aut odit. Harum assumenda corrupti.\\n\\nFacilis esse sed. Eligendi quis beatae. In illum corporis.\\n\\nDistinctio dolore qui. Delectus veritatis fuga. Autem omnis harum.',
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
      id: '33',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Ducimus sapiente adipisci. Vitae animi eius. Assumenda id quas.\\n\\nEst saepe velit. Et ab nulla. Veniam cumque ut.\\n\\nQuas vero explicabo. Rerum possimus ut. Officia et a.',
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
      id: '27',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Veniam dolorem rerum. Adipisci quam molestiae. Adipisci nisi atque.\\n\\nNulla nostrum totam. Molestiae quas quis. Maiores et magnam.\\n\\nPerspiciatis corrupti ullam. Quia ducimus omnis. Et omnis odit.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '29',
              type: 'GraduationPlanRequirement',
            },
            {
              id: '30',
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
      id: '30',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Ab molestias nihil. Repellat ut omnis. Dolores in ut.\\n\\nVero et numquam. Adipisci modi est. Officiis repellat nisi.\\n\\nEst et eaque. Reiciendis tempora cum. Eum explicabo enim.',
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
            id: '27',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '35',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Perferendis ullam voluptatum. Fuga odio necessitatibus. Aut aut in.\\n\\nMagni rem quam. Numquam labore illo. Impedit dolores assumenda.\\n\\nVoluptas rerum aspernatur. Est ipsa consequatur. Voluptas officiis illum.',
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
      id: '31',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Veniam perspiciatis sed. Aut consequatur velit. Ratione dicta sed.\\n\\nVoluptas consectetur magni. Dolores nemo delectus. Esse aliquid ut.\\n\\nA earum eum. Eius illo et. Cupiditate repellat perspiciatis.',
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
      id: '28',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Delectus perspiciatis placeat. Voluptatem ut ut. Nam ut ut.\\n\\nExercitationem asperiores recusandae. Natus eveniet numquam. Sint error est.\\n\\nConsectetur rerum libero. Quam fugiat sunt. Veniam inventore sequi.',
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
