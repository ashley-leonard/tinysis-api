// GET /api/categories
export default {
  data: [
    {
      id: '8',
      type: 'category',
      attributes: {
        name: 'Category 1',
        sequence: 0,
        public: false,
        reporting: 'none',
        activeContractsCount: 1,
        homeroom: false,
      },
      relationships: {
        contracts: {
          data: [
            {
              id: '10',
              type: 'contract',
            },
            {
              id: '14',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '9',
      type: 'category',
      attributes: {
        name: 'Category 2',
        sequence: 0,
        public: false,
        reporting: 'none',
        activeContractsCount: 1,
        homeroom: false,
      },
      relationships: {
        contracts: {
          data: [
            {
              id: '11',
              type: 'contract',
            },
            {
              id: '12',
              type: 'contract',
            },
            {
              id: '13',
              type: 'contract',
            },
            {
              id: '15',
              type: 'contract',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 2,
  },
};
