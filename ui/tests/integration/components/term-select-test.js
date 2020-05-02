import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { Interactor } from '@bigtest/interactor';
import TermsFixture from '../../fixtures/admin-terms-list';
import { clone } from '../../helpers/test-utils';

let requests;

module('Integration | Component | term-select', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    requests = [];
    this.didUpdate = (value, name) => {
      requests.push({ value, name });
    };

    const terms = clone(TermsFixture).data;
    const [, term] = terms;

    this.setProperties({
      terms,
      term,
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <TermSelect 
        @prompt="Pick a term"
        @terms={{terms}}
        @value={{term.id}}
        name="interminable"
      />
    `);

    assert.ok(find('select[name="interminable"]'), 'rendered select as expected');
    assert.equal(findAll('select[name="interminable"] option').length, this.terms.length + 1, 'rendered all terms plus prompt');

    let option = find(`select[name="interminable"] option[value="${this.term.id}"]`);
    assert.ok(option, 'found option that should be selected');
    assert.ok(option.selected, 'and it is selected');

    const [anotherToSelect] = this.terms;

    await new Interactor('select[name="interminable"]').select(anotherToSelect.attributes.name);

    option = find(`select[name="interminable"] option[value="${anotherToSelect.id}"]`);
    assert.ok(option, 'found option that should be selected');
    assert.ok(option.selected, 'and it is selected');
  });
});
