import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Validator from 'tinysis-ui/utils/validator';
import {
  render,
  find,
  click,
  fillIn,
} from '@ember/test-helpers';
import { resolve } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';

let requests;

module('Integration | Component | t-form', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      model: {
        attributes: {
          name: 'Sam',
          age: null,
          booOrFalse: true,
        },
      },
      validator: new Validator({
        name: { type: 'required' },
        age: { type: 'format', regex: /\d+/ },
      }),
      save(outbound) {
        requests.push({ type: 'submit', outbound });
        return resolve({ data: outbound });
      },
      reportError(errors) {
        requests.push({ type: 'error', errors });
      },
    });
    requests = [];
  });


  test('it renders and submits expected calls', async function (assert) {
    await render(hbs`
      {{#t-form
        validator=validator
        model=model
        save=save
        reportError=reportError
        as |form|
      }}
        <input name="name" value={{pojo.attributes.name}}>
        <input name="age" value={{pojo.attributes.age}} >
        <input name="booOrFalse" type="checkbox" checked={{pojo.attributes.booOrFalse}} onchange={{action "toggleValue" "booOrFalse" target=form}}>
        <button type="submit">Save</button>
      {{/t-form}}
    `);

    assert.ok(find('form'), 'form element found');
    assert.ok(find('form button[type="submit"]'), 'submit button rendered');

    await click('button');

    assert.equal(requests.length, 1, 'an outbound call resulted from submit attempt');
    let [request] = requests;
    assert.equal(request.type, 'error', 'request was reporting a validation error');
    assert.ok(request.errors.age, 'age error reported');
    assert.notOk(request.errors.name, 'name was present and valid');

    requests = [];
    await fillIn("input[name='age']", 'old');
    await click('button');

    assert.equal(requests.length, 1, 'another call present after button click');
    [request] = requests;
    assert.equal(request.type, 'error', 'still an age error witth invalid number');
    assert.ok(request.errors.age, 'age error reported');
    assert.notOk(request.errors.name, 'name was present and valid');

    requests = [];
    await fillIn("input[name='age']", '55');
    await click("input[name='booOrFalse']");
    await click('button');

    assert.equal(requests.length, 1, 'another outbound call occurred');
    [request] = requests;
    assert.equal(request.type, 'submit', 'this time a submit occurred');
    assert.equal(request.outbound.attributes.name, this.model.attributes.name, 'name is present outbound');
    assert.equal(request.outbound.attributes.age, '55', 'updated age is present outbound');
    assert.equal(request.outbound.attributes.booOrFalse, false, 'updated checkbox value to false');

    await click("input[name='booOrFalse']");
    await click('button');

    assert.equal(request.outbound.attributes.booOrFalse, true, 'updated checkbox value to true');
  });
});
