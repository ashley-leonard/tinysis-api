import EmberObject from '@ember/object';
import NotesMixin from 'tinysis-ui/mixins/notes';
import { module, test } from 'qunit';

module('Unit | Mixin | notes', () => {
  // Replace this with your real tests.
  test('it works', (assert) => {
    const NotesObject = EmberObject.extend(NotesMixin);
    const subject = NotesObject.create();
    assert.ok(subject);
  });
});
