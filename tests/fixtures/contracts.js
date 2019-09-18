// GET /api/contracts
export default {
  data: [
    {
      id: '10',
      type: 'contract',
      attributes: {
        name: 'Virga amoveo tracto armarium ab.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '8',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '187',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '60',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '19',
              type: 'enrollment',
            },
            {
              id: '20',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '11',
      type: 'contract',
      attributes: {
        name: 'Angulus approbo solio antepono vulariter.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '9',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '188',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '61',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '21',
              type: 'enrollment',
            },
            {
              id: '22',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '12',
      type: 'contract',
      attributes: {
        name: 'Accendo corrigo illum denego sumptus.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '9',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '188',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '61',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '23',
              type: 'enrollment',
            },
            {
              id: '24',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '13',
      type: 'contract',
      attributes: {
        name: 'Despecto denuo cubitum claro velit.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '9',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '188',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '61',
            type: 'term',
          },
        },
        enrollments: {
          data: [

          ],
        },
      },
    },
    {
      id: '14',
      type: 'contract',
      attributes: {
        name: 'Non cena atque vindico vestrum.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '8',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '187',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '62',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '15',
              type: 'enrollment',
            },
            {
              id: '16',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '15',
      type: 'contract',
      attributes: {
        name: 'Caritas tubineus tempus voco vestigium.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '9',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '188',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '62',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '17',
              type: 'enrollment',
            },
            {
              id: '18',
              type: 'enrollment',
            },
          ],
        },
      },
    },
  ],
  included: [
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
      id: '187',
      type: 'user',
      attributes: {
        firstName: 'Judson',
        lastName: 'Emmerich',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'hosea@kovacek.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '191',
              type: 'user',
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
    {
      id: '188',
      type: 'user',
      attributes: {
        firstName: 'Bo',
        lastName: 'Hartmann',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'marcelle@satterfield.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '192',
              type: 'user',
            },
            {
              id: '193',
              type: 'user',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 6,
  },
};
