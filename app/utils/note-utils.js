import { get } from '@ember/object';

/*
 Builds a hash keyed by the IDs of the notable, with values being
 the note records for that status.
 */
export function generateNotableHash(result, notables, hashKeyPath) {
  const notablesHash = notables.reduce((memo, notable) => {
    memo[notable.id] = notable;
    return memo;
  }, {});

  return result.data.reduce((memo, note) => {
    const { id: notableId } = note.relationships.notable.data;
    const notable = notablesHash[notableId];
    const key = get(notable, hashKeyPath);

    memo[key] = memo[key] || [];
    memo[key].push(note);
    return memo;
  }, {});
}
