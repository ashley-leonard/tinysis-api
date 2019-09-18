// GET /api/graduation-plan-requirements
export default {
  data: [
    {
      id: '42',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Et aperiam itaque. Quam harum autem. Error veniam quo.\\n\\nSit dolorum labore. Quaerat temporibus libero. Sint voluptates exercitationem.\\n\\nQuibusdam nobis et. Doloribus voluptas officia. Qui aut alias.',
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
      id: '39',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Itaque quas et. Officia dignissimos in. At minus autem.\\n\\nDucimus eos quisquam. Fuga ratione non. Dolor esse asperiores.\\n\\nCumque quaerat dignissimos. Rem dolorem assumenda. Unde aut iste.',
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
            id: '37',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '36',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Ipsam inventore est. Adipisci vel et. Nesciunt adipisci aut.\\n\\nRecusandae ut est. Illum cum voluptatem. Assumenda animi tempora.\\n\\nIpsa molestias ipsam. Explicabo hic ut. Vitae eius id.',
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
      id: '44',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Impedit reprehenderit corporis. Eligendi maiores ut. Aut aliquam praesentium.\\n\\nDistinctio aut quisquam. Ut velit nam. Fugit numquam dolore.\\n\\nQuia consequatur dignissimos. Reprehenderit quisquam eius. Dolores optio recusandae.',
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
      id: '43',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Iste quis cum. Nam officiis maxime. Ab qui placeat.\\n\\nBeatae qui nulla. Modi vero natus. Laudantium ullam ipsum.\\n\\nReprehenderit non voluptatum. Tenetur provident et. Et inventore voluptatem.',
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
      id: '37',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Distinctio reiciendis sint. Unde ea et. Ducimus pariatur nulla.\\n\\nEt ratione nesciunt. Alias nihil quia. Autem exercitationem libero.\\n\\nIure modi praesentium. Consequatur et sint. Unde ratione qui.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '39',
              type: 'GraduationPlanRequirement',
            },
            {
              id: '40',
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
      id: '40',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Quaerat aut alias. Debitis molestiae dolor. Dignissimos quis exercitationem.\\n\\nLibero doloribus similique. Officia sint odio. Necessitatibus sit sunt.\\n\\nNatus omnis expedita. Modi neque enim. Aut quasi voluptas.',
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
            id: '37',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '45',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Voluptatibus vero reprehenderit. Aut est eos. Consequuntur excepturi et.\\n\\nQuae sit facilis. Consequatur sapiente labore. Voluptatem voluptatem iure.\\n\\nVoluptatibus non ab. Id eum et. Accusamus in beatae.',
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
      id: '41',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Est modi qui. Consequatur quas nihil. Sint sunt natus.\\n\\nOdit atque asperiores. Ducimus rem repellendus. Quia odio tenetur.\\n\\nVel ex iste. Accusantium amet sint. Illo distinctio illum.',
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
      id: '38',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Incidunt et amet. Laudantium odio quidem. Soluta rem laborum.\\n\\nQuidem occaecati laboriosam. Velit et eligendi. Quibusdam deleniti quae.\\n\\nBeatae autem vel. Ut dolores qui. Repellat tempore ipsa.',
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
