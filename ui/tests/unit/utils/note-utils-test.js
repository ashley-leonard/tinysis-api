import { module, test } from 'qunit';
import { generateNotableHash } from 'tinysis-ui/utils/note-utils';
import notesResult from '../../fixtures/notes-contract-enrollments';
import enrollmentsResult from '../../fixtures/contract-enrollments';

module('Unit | Utility | note-utils', (/* hooks */) => {
  test('it hashes a notes result', (assert) => {
    const result = generateNotableHash(notesResult, enrollmentsResult.data, 'id');
    assert.equal(typeof result, 'object', 'a hash was returned');

    const [sampleNote] = notesResult.data;
    const matchingEnrollment = enrollmentsResult.data.find(enrollment => enrollment.id === sampleNote.relationships.notable.data.id);
    const matchingHashEntry = result[matchingEnrollment.id];

    assert.ok(matchingHashEntry, 'a hash entry is keyed to the expected enrollmentId');
    assert.ok(Array.isArray(matchingHashEntry), 'the hash value is an array');

    const matchingNote = matchingHashEntry.find(note => note.id === sampleNote.id);
    assert.ok(matchingNote, 'the note is in the array as expected');
  });
});
