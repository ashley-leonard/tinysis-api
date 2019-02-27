import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import notesResult from '../../fixtures/notes-contract-enrollments';

module('Unit | Service | tiny-data', (hooks) => {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:tiny-data');
    assert.ok(service);
  });

  test('it stores a JSON api result', function (assert) {
    const service = this.owner.lookup('service:tiny-data');
    service.addResult(notesResult);

    const [fixture] = notesResult.data;
    const note = service.get('note', fixture.id);
    assert.ok(note, 'object exists');
    assert.notEqual(note, fixture, 'object is not the same as the original');
    assert.equal(note.id, fixture.id, 'correct fixture was retrieved');
    assert.equal(note.attributes.note, fixture.attributes.note, 'attributes were retrieved');

    const creator = service.get('user', note.relationships.creator.data.id);
    assert.ok(creator, 'included object was stored as well');
    assert.equal(note.relationships.creator.data.id, creator.id);
  });

  test('sets and retrieves dates', function (assert) {
    const service = this.owner.lookup('service:tiny-data');
    const today = new Date();

    assert.ok(service.getToday(), 'a default date of today is retrieved');

    service.setToday(today);
    assert.equal(today.toISOString(), service.getToday().toISOString());
  });
});
