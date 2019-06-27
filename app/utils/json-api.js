/*
 * Creates a JSONAPI-style model with the indicated type, attributes,
 * and relationships.
 *
 * @param {String} type - the typename for the object
 * @param {Object} attributes - the attributes
 * @param {Object} ...relationships - one or more related JSONAPI models
 * to link as relationships
 *
 * @returns the new model
 */
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

/*
 * Diffs two JSONAPI models, returning a list of keys that are different
 *
 * @param {Object} origModel - the unaltered object
 * @param {Object} alteredModel - the changed object
 *
 * @returns {Array} list of keys that are different
 */
export function getChangedKeys(origModel, alteredModel) {
  const attrs = origModel.attributes;
  const newAttrs = alteredModel.attributes;

  // unique keys first among both
  const uniques = Object.keys(attrs).concat(Object.keys(newAttrs))
    .reduce((memo, key) => {
      memo[key] = key;
      return memo;
    }, {});

  return Object.keys(uniques)
    .reduce((memo, key) => {
      if (attrs[key] !== newAttrs[key]) {
        memo.push(key);
      }
      return memo;
    }, []);
}
