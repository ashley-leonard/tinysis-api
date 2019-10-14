// GET /api/graduation-plan-requirements
export default {
  data: [
    {
      id: '21',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Officia ut mollitia. Commodi rem tempora. Enim amet praesentium.\\n\\nReiciendis iste odit. Et enim similique. Laboriosam ut totam.\\n\\nDeleniti consequatur nihil. Saepe modi magni. Architecto eaque quam.',
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
        notes: 'Veritatis perferendis ut. Architecto excepturi rerum. Quia dolorem eos.\\n\\nOdio quaerat itaque. Molestiae enim ex. Maxime qui rerum.\\n\\nEt officia eos. Laudantium exercitationem odit. Facere aut ad.',
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
        notes: 'Enim non odit. Sint sed ut. In enim aut.\\n\\nSunt pariatur fugit. In autem est. Aut optio et.\\n\\nImpedit saepe rem. Aut illum exercitationem. Doloribus voluptate ipsam.',
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
        notes: 'Qui quae sint. Aspernatur sapiente saepe. Nulla laborum a.\\n\\nDucimus voluptatem vitae. Non vel quaerat. In similique ab.\\n\\nRecusandae quasi dolorum. Aliquam quisquam possimus. Ipsa ut sunt.',
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
        notes: 'Suscipit nobis aut. Deserunt ea blanditiis. Ab est maxime.\\n\\nEt et iusto. Quis non aut. Corrupti et aut.\\n\\nBeatae corporis dolor. Minus laudantium cumque. Delectus in sit.',
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
        notes: 'Sed quia a. Saepe quibusdam facilis. Laboriosam vitae et.\\n\\nId aliquid ut. Suscipit debitis qui. Quod impedit magni.\\n\\nAut iure quaerat. Similique et atque. Unde qui numquam.',
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
        notes: 'Quo ullam sequi. Eaque quis dolores. Tenetur natus officia.\\n\\nIncidunt tempora quo. Minima est sed. Ratione voluptatum voluptatibus.\\n\\nHic blanditiis laudantium. Ut voluptatem nihil. Omnis voluptas quis.',
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
        notes: 'Molestiae pariatur numquam. Ad exercitationem autem. Aut omnis et.\\n\\nExercitationem quasi enim. Quia iste odit. Recusandae vitae in.\\n\\nId similique molestiae. Et ut et. Explicabo possimus voluptatibus.',
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
        notes: 'Eos id eaque. Ea laborum et. Modi atque aperiam.\\n\\nRecusandae eligendi saepe. In dolor adipisci. Voluptatem et ducimus.\\n\\nAccusantium omnis quis. Occaecati voluptatem autem. Eveniet aut est.',
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
        notes: 'Ipsam quas provident. Aut aut nesciunt. Rerum adipisci ut.\\n\\nAssumenda nulla voluptates. Repudiandae rerum voluptatum. Assumenda aut eos.\\n\\nVelit dolores odio. Et illo est. Aliquam quo rerum.',
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
