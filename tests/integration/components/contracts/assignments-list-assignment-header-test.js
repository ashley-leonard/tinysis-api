import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import contractAssignments from '../../../fixtures/contract-assignments';

let tinyData;

module('Integration | Component | contracts/assignments-list-assignment-header', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractAssignments);

    [this.assignment] = tinyData.get('assignment');
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <table>
        <thead>
          {{contracts/assignments-list-assignment-header
            assignment=assignment
          }}
        </thead>
      </table>
    `);

    const thAll = findAll('th');
    assert.equal(thAll.length, 1, 'a single table head rendered');

    const tspan = find('tspan');
    assert.ok(tspan, 'the tspan rendered');

    assert.equal(tspan.innerHTML.trim(), this.assignment.attributes.name, 'got expected assignment title');
  });
});
