import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { generateNotableHash } from 'tinysis-ui/utils/note-utils';
import notesCoorStatuses from '../../fixtures/notes-coor-statuses';
import coorStatuses from '../../fixtures/coor-statuses';

import { stubTinyData } from '../../helpers/stub-tiny-data';
import staffFixture from '../../fixtures/staff';

let notableHash;
let tinyData;

module('Integration | Component | notes-list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(staffFixture);

    notableHash = generateNotableHash(notesCoorStatuses, coorStatuses.data, 'id');

    [this.notable] = coorStatuses.data;
    this.notes = notableHash[this.notable.id];
  });

  test('it renders', async function (assert) {
    // insert another note so two li's
    notableHash[this.notable.id] = notableHash[this.notable.id].concat(notableHash[this.notable.id]);

    await render(hbs`{{notes-list notes=notes notable=status}}`);

    assert.matches(this.element.textContent, new RegExp(this.notes[0].attributes.note));
    assert.equal(this.element.querySelectorAll('li').length, this.notes.length, 'expected correct number of list items');
  });
});
