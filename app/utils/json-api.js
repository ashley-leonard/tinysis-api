export function createEntity(type, attributes, ...relationships) {
  const relations = relationships.length && relationships.reduce((memo, relation) => {
    memo[relation.type] = {
      data: {
        type: relation.type,
        id: relation.id,
      },
    };
    return memo;
  }, {});

  const entity = {
    type,
    attributes,
  };

  if (relations) {
    return {
      ...entity,
      relationships: relations,
    };
  }

  return entity;
}
