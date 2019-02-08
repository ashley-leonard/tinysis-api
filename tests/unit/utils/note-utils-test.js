import { module, test } from 'qunit';
import { generateNotableHash } from 'tinysis-ui/utils/note-utils';
import { notesResult, statusResult } from '../../fixtures/notes';

module('Unit | Utility | note-utils', (/* hooks */) => {
  test('it hashes a notes result', (assert) => {
    const result = generateNotableHash(notesResult, statusResult.data, 'enrollmentId');
    assert.equal(typeof result, 'object', 'a hash was returned');

    const [sampleNote] = notesResult.data;
    const matchingStatus = statusResult.data.find(status => status.id === sampleNote.attributes.notableId);
    const matchingHashEntry = result[matchingStatus.attributes.enrollmentId];

    assert.ok(matchingHashEntry, 'a hash entry is keyed to the expected enrollmentId');
    assert.ok(Array.isArray(matchingHashEntry), 'the hash value is an array');

    const matchingNote = matchingHashEntry.find(note => note.id === sampleNote.id);
    assert.ok(matchingNote, 'the note is in the array as expected');
  });
});
