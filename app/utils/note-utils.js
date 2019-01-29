/*
 Builds a hash keyed by the IDs of the notable, with values being
 the note records for that status.
 */
export function generateNotableHash(result, notables, hashKey) {
  const notablesHash = notables.data.reduce((memo, notable) => {
    memo[notable.id] = notable;
    return memo;
  }, {});

  return result.data.reduce((memo, note) => {
    const { notableId } = note.attributes;
    const notable = notablesHash[notableId];
    const key = hashKey === 'id' ? notable.id : notable.attributes[hashKey];

    memo[key] = memo[key] || [];
    memo[key].push(note);
    return memo;
  }, {});
}
