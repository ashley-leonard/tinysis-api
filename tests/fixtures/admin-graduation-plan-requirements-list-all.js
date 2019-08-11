// GET /api/admin/graduation-plan-requirements?status=all
export default {
  data: [
    {
      id: '7',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Fugit molestias non. Est iure eaque. Possimus maxime debitis.\\n\\nNon harum veniam. Aperiam esse repudiandae. Maiores quis voluptatem.\\n\\nOmnis officia asperiores. Voluptatum distinctio non. Blanditiis a soluta.',
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
        notes: 'Rerum nesciunt quia. Sunt rerum officia. Eius dolorem velit.\\n\\nLabore dolorem quos. Fugit non et. Sit temporibus architecto.\\n\\nNam voluptas ut. Accusamus placeat nesciunt. Consequuntur qui aut.',
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
        notes: 'Accusamus eos ut. Sint esse sit. Autem maiores fugiat.\\n\\nVero ipsum odio. Aut non qui. Unde pariatur molestias.\\n\\nAnimi commodi et. Sit assumenda soluta. Fugit voluptatem est.',
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
        notes: 'Omnis eos et. Dolores facilis perferendis. Dolore ratione neque.\\n\\nQui error deleniti. Enim consequatur cum. Qui nihil earum.\\n\\nAliquid vel nobis. Et voluptates omnis. Omnis dolorum dolor.',
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
        notes: 'Nesciunt sunt ipsum. Id eos sunt. Aperiam necessitatibus libero.\\n\\nIllum minima animi. Eligendi et voluptatem. Officiis molestiae ea.\\n\\nOfficia iusto sapiente. Velit iusto ut. Distinctio autem eum.',
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
        notes: 'Quos natus quidem. Aliquid quae iure. Pariatur iure placeat.\\n\\nEst eos ipsum. Culpa accusantium mollitia. In vel autem.\\n\\nNeque est aut. Aut earum ab. Cum et sit.',
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
        notes: 'Dolorem ut deleniti. Eligendi quis ducimus. Architecto autem mollitia.\\n\\nAd velit laborum. Quod qui sit. Impedit officia qui.\\n\\nSunt et nesciunt. Ipsa incidunt praesentium. Cum quis officia.',
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
        notes: 'Facere labore magni. Voluptates nihil est. Corrupti neque qui.\\n\\nQuo sed itaque. Corporis id dicta. Dolor illum officia.\\n\\nPossimus ipsa reiciendis. Quisquam accusantium sit. Voluptatem ut dolor.',
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
        notes: 'Iure ut quam. Consequatur necessitatibus velit. Expedita dolore fugit.\\n\\nVelit eaque optio. Numquam non architecto. Velit vitae sit.\\n\\nNostrum ad ex. Qui ipsa dicta. Iste excepturi sed.',
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
        notes: 'Quo consequatur non. Et deserunt mollitia. Id harum nemo.\\n\\nQuaerat sequi ad. Quis sit beatae. Consequatur et aliquam.\\n\\nRepellendus omnis quasi. Ullam ea incidunt. Pariatur labore provident.',
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
