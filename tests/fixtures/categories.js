// GET /api/categories
export default {
  data: [
    {
      id: '6',
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
              id: '6',
              type: 'contract',
            },
            {
              id: '8',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '7',
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
              id: '7',
              type: 'contract',
            },
            {
              id: '9',
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
