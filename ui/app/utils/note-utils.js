import { get } from '@ember/object';

/*
  Builds a hash keyed by the IDs of the notable, with values being
  the note records for that status.

  @param result The api result
  @param notables The objects to which the notes apply
  @param hashKeyPath The attribute path within the referenced notable
  object, that we want to key the resulting hash on.

  @returns a hash, in which the keys are the attribute value from the
  hashKeyPath, and the values are arrays of notes associated with that
  notable object
 */
export function generateNotableHash(result, notables, hashKeyPath) {
  const notablesHash = notables.reduce((memo, notable) => {
    memo[notable.id] = notable;
    return memo;
  }, {});

  return result.data.reduce((memo, note) => {
    const { id: notableId } = note.relationships.notable.data;
    const notable = notablesHash[notableId];

    // mainly test scenario. but if no notable present
    // we just need to ignore this one
    if (!notable) return memo;

    const key = get(notable, hashKeyPath);

    memo[key] = memo[key] || [];
    memo[key].push(note);
    return memo;
  }, {});
}
